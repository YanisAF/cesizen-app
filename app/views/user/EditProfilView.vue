<template>
    <Page actionBarHidden="true">
        <GridLayout rows="56, *">
            
            <!-- AppBar -->
            <AppBar
            row="0"
            title="Modifier mon profil"
            showBack
            @back="navigateTo('Profile')"
            />
            
            <DockLayout row="1" stretchLastChild="true">
                <BottomMenu dock="bottom" />
                
                <ScrollView>
                    <StackLayout :style="containerStyle">
                        
                        <ActivityIndicator v-if="userStore.loading" :busy="true" :style="loaderStyle" />
                        
                        <template v-else-if="user">
                            
                            <!-- Avatar & nom -->
                            <StackLayout :style="profileHeaderStyle">
                                <Label :text="initials" :style="avatarStyle" />
                                <Label :text="user.user_name" :style="nameStyle" />
                                <Label :text="user.email" :style="emailStyle" />
                            </StackLayout>
                            
                            <!-- Formulaire -->
                            <StackLayout :style="sectionStyle">
                                <Label text="Informations personnelles" :style="sectionTitleStyle" accessibilityRole="header" />
                                
                                <!-- Identifiant -->
                                <StackLayout :style="fieldGroupStyle">
                                    <Label text="Identifiant" :style="fieldLabelStyle" />
                                    <TextField
                                    v-model="form.user_name"
                                    hint="Votre identifiant"
                                    :style="[textFieldStyle, errors.user_name ? textFieldErrorStyle : {}]"
                                    returnKeyType="next"
                                    autocorrect="false"
                                    autocapitalizationType="none"
                                    />
                                    <Label v-if="errors.user_name" :text="errors.user_name" :style="fieldErrorStyle" />
                                </StackLayout>
                                
                                <!-- E-mail -->
                                <StackLayout :style="fieldGroupStyle">
                                    <Label text="E-mail" :style="fieldLabelStyle" />
                                    <TextField
                                    v-model="form.email"
                                    hint="Votre adresse e-mail"
                                    keyboardType="email"
                                    :style="[textFieldStyle, errors.email ? textFieldErrorStyle : {}]"
                                    returnKeyType="next"
                                    autocorrect="false"
                                    autocapitalizationType="none"
                                    />
                                    <Label v-if="errors.email" :text="errors.email" :style="fieldErrorStyle" />
                                </StackLayout>
                                
                                <!-- Téléphone -->
                                <StackLayout :style="fieldGroupStyle">
                                    <Label text="Téléphone" :style="fieldLabelStyle" />
                                    <TextField
                                    v-model="form.phone"
                                    hint="Ex : +33 6 00 00 00 00"
                                    keyboardType="phone"
                                    :style="[textFieldStyle, errors.phone ? textFieldErrorStyle : {}]"
                                    returnKeyType="done"
                                    />
                                    <Label v-if="errors.phone" :text="errors.phone" :style="fieldErrorStyle" />
                                </StackLayout>
                                
                            </StackLayout>
                            
                            <!-- Actions -->
                            <StackLayout :style="actionsStyle">
                                <DsfrButton
                                label="Enregistrer les modifications"
                                variant="primary"
                                fullWidth
                                :disabled="userStore.saving"
                                @tap="submitForm"
                                />
                                <DsfrButton
                                label="Annuler"
                                variant="secondary"
                                fullWidth
                                @tap="navigateTo('Profile')"
                                />
                            </StackLayout>
                            
                            <!-- Note RGPD -->
                            <StackLayout :style="rgpdStyle">
                                <Label
                                text="Conformément au RGPD, vous pouvez exercer vos droits d'accès, de rectification et de suppression à tout moment."
                                textWrap="true"
                                :style="rgpdTextStyle"
                                />
                            </StackLayout>
                            
                        </template>
                        
                        <AlertBanner v-if="userStore.error" :message="userStore.error" type="error" />
                        <AlertBanner v-if="successMessage" :message="successMessage" type="success" />
                        
                    </StackLayout>
                </ScrollView>
            </DockLayout>
            
        </GridLayout>
    </Page>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useNavigation } from '../../composables/useNavigation'
import { useAuthStore } from '../../stores/auth'
import { useUserStore } from '../../stores/user'
import { DSFR } from '../../utils/design'
import AppBar from '../../components/layout/AppBar.vue'
import BottomMenu from '../../components/layout/BottomMenu.vue'
import DsfrButton from '../../components/common/DsfrButton.vue'
import AlertBanner from '../../components/common/AlertBanner.vue'

const { navigateTo } = useNavigation()
const authStore = useAuthStore()
const userStore = useUserStore()

const user = computed(() => authStore.user)

const initials = computed(() => {
    const n = form.user_name ?? user.value?.user_name ?? '?'
    return n.slice(0, 2).toUpperCase()
})

const form = reactive({
    user_name: '',
    email: '',
    phone: ''
})

const errors = reactive({
    user_name: '',
    email: '',
    phone: ''
})

const successMessage = ref('')

onMounted(async () => {
    if (user.value?.id) await userStore.fetchProfile(user.value.id)
    form.user_name = user.value?.user_name ?? ''
    form.email = user.value?.email ?? ''
    form.phone = user.value?.phone ?? ''
})

function validate(): boolean {
    errors.user_name = ''
    errors.email = ''
    errors.phone = ''
    let valid = true
    
    if (!form.user_name.trim()) {
        errors.user_name = "L'identifiant est requis."
        valid = false
    } else if (form.user_name.trim().length < 3) {
        errors.user_name = "L'identifiant doit contenir au moins 3 caractères."
        valid = false
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
        errors.email = "L'adresse e-mail est requise."
        valid = false
    } else if (!emailRegex.test(form.email.trim())) {
        errors.email = "L'adresse e-mail n'est pas valide."
        valid = false
    }
    
    if (form.phone.trim() && !/^[\d\s\+\-\(\)]{7,20}$/.test(form.phone.trim())) {
        errors.phone = 'Le numéro de téléphone n\'est pas valide.'
        valid = false
    }
    
    return valid
}

async function submitForm() {
    successMessage.value = ''
    if (!validate()) return
    if (!user.value?.id) return
    
    try {
        await userStore.updateProfile(user.value.id, {
            user_name: form.user_name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim() || undefined
        })
        successMessage.value = 'Vos informations ont été mises à jour avec succès.'
        
        setTimeout(() => navigateTo('Profile'), 1500)
    } catch (_) {
        // catch by userStore
    }
}

// ─── Styles ────────────────────────────────────────────────────────────────────
const containerStyle = { backgroundColor: DSFR.colors.background }

const profileHeaderStyle = {
    backgroundColor: DSFR.colors.blueFrance,
    padding: DSFR.spacing.xl,
    alignItems: 'center'
}

const avatarStyle = {
    width: 72, height: 72, borderRadius: 36,
    backgroundColor: DSFR.colors.blueFranceLight,
    color: DSFR.colors.blueFrance,
    fontSize: DSFR.typography.size2xl,
    fontWeight: DSFR.typography.weightBold,
    textAlignment: 'center',
    lineHeight: 72
}

const nameStyle = {
    color: DSFR.colors.white,
    fontSize: DSFR.typography.sizeXl,
    fontWeight: DSFR.typography.weightBold,
    marginTop: DSFR.spacing.sm
}

const emailStyle = {
    color: DSFR.colors.white,
    fontSize: DSFR.typography.sizeMd,
    opacity: 0.8
}

const sectionStyle = {
    backgroundColor: DSFR.colors.white,
    padding: DSFR.spacing.lg,
    marginBottom: DSFR.spacing.xs
}

const sectionTitleStyle = {
    fontSize: DSFR.typography.sizeLg,
    fontWeight: DSFR.typography.weightBold,
    color: DSFR.colors.grey950,
    marginBottom: DSFR.spacing.md
}

const fieldGroupStyle = {
    marginBottom: DSFR.spacing.md
}

const fieldLabelStyle = {
    fontSize: DSFR.typography.sizeSm,
    fontWeight: DSFR.typography.weightMedium,
    color: DSFR.colors.grey950,
    marginBottom: DSFR.spacing.xs
}

const textFieldStyle = {
    fontSize: DSFR.typography.sizeMd,
    color: DSFR.colors.grey950,
    backgroundColor: DSFR.colors.white,
    borderWidth: 1,
    borderColor: DSFR.colors.grey625,
    borderRadius: DSFR.radius.sm ?? 4,
    padding: '10 12',
    height: 44
}

const textFieldErrorStyle = {
    borderColor: DSFR.colors.error,
    borderWidth: 2
}

const fieldErrorStyle = {
    fontSize: DSFR.typography.sizeSm,
    color: DSFR.colors.error,
    marginTop: DSFR.spacing.xs
}

const actionsStyle = {
    backgroundColor: DSFR.colors.white,
    padding: DSFR.spacing.lg,
    marginBottom: DSFR.spacing.xs
}

const loaderStyle = { margin: DSFR.spacing['2xl'] }

const rgpdStyle = {
    backgroundColor: DSFR.colors.grey100,
    padding: DSFR.spacing.lg
}

const rgpdTextStyle = {
    fontSize: DSFR.typography.sizeSm,
    color: DSFR.colors.grey625
}
</script>