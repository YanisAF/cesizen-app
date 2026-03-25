// ============================================================
// Validations — conformes aux contraintes Spring Boot (@NotBlank, @Size)
// ============================================================

export interface ValidationResult {
  valid: boolean
  message: string
}

export const validators = {
  required: (value: string, label = 'Ce champ'): ValidationResult => ({
    valid: !!value?.trim(),
    message: `${label} est obligatoire`
  }),
  
  userName: (value: string): ValidationResult => {
    if (!value?.trim()) return { valid: false, message: 'L\'identifiant est obligatoire' }
    if (value.length < 3 || value.length > 32)
      return { valid: false, message: 'L\'identifiant doit contenir entre 3 et 32 caractères' }
    return { valid: true, message: '' }
  },
  
  email: (value: string): ValidationResult => {
    if (!value?.trim()) return { valid: false, message: 'L\'adresse électronique est obligatoire' }
    if (value.length < 6 || value.length > 32)
      return { valid: false, message: 'L\'adresse doit contenir entre 6 et 32 caractères' }
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!re.test(value)) return { valid: false, message: 'Format d\'adresse électronique invalide' }
    return { valid: true, message: '' }
  },
  
  password: (value: string): ValidationResult => {
    if (!value) return { valid: false, message: 'Le mot de passe est obligatoire' }
    if (value.length < 6) return { valid: false, message: 'Le mot de passe doit contenir au moins 6 caractères' }
    return { valid: true, message: '' }
  },
  
  passwordConfirm: (password: string, confirm: string): ValidationResult => ({
    valid: password === confirm,
    message: password === confirm ? '' : 'Les mots de passe ne correspondent pas'
  }),
  
  phone: (value: string): ValidationResult => {
    if (!value) return { valid: true, message: '' }  // optionnel
    const re = /^(\+33|0)[1-9](\d{8})$/
    return {
      valid: re.test(value.replace(/\s/g, '')),
      message: 'Numéro de téléphone invalide (format FR attendu)'
    }
  },
  
  pin: (value: string): ValidationResult => {
    if (!value) return { valid: false, message: 'Le code est obligatoire' }
    if (!/^\d{4,6}$/.test(value))
      return { valid: false, message: 'Le code doit contenir 4 à 6 chiffres' }
    return { valid: true, message: '' }
  }
}

// Valide un formulaire entier et retourne les erreurs par champ
export function validateForm(rules: Record<string, ValidationResult>): {
  valid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}
  let valid = true
  for (const [key, result] of Object.entries(rules)) {
    if (!result.valid) {
      errors[key] = result.message
      valid = false
    }
  }
  return { valid, errors }
}
