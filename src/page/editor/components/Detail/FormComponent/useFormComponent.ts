export const useFormComponent = <T>(defaultValue: T) => {
  const emits = defineEmits(['change'])

  const formValue = ref<T>(defaultValue)
  const handleChange = (newValue: T) => {
    emits('change', newValue)
  }

  return {
    formValue,
    handleChange
  }
}
