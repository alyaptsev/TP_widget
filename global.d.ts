interface TPFormI18nTokens {
  title?: string,
  description?: string,
  departPlaceholder?: string,
  returnPlaceholder?: string,
  button?: string
}

interface TPFormInitProps {
  /** Root element to render widget in */
  root: string,
  /** Button color. Used fo button only */
  buttonColor?: string,
  /** Background color. Used for background and icons */
  backgroundColor?: string,
  /** Text color. Used for text and button */
  textColor?: string,
  /** Localization */
  i18n?: TPFormI18nTokens
}

interface TPForm {
  set: (settings: TPFormInitProps) => void,
  update: () => void,
  destroy: () => void,
  render: (root?: string) => void
}

interface Window {
  TPForm: TPForm
}
