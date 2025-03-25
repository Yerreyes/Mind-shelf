'use server';

// This function does not receive the previous state (...prevState) because it is not utilizing the useFormState hook, which is typically used for managing form state in React.
export async function saveFormData (formData) {
    console.log(formData);
	return {...formData };
};
