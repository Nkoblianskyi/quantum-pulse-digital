"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export type FormState = {
  errors?: {
    name?: string[]
    email?: string[]
    service?: string[]
    message?: string[]
    dataProcessing?: string[]
    privacyPolicy?: string[]
    cookiePolicy?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  let errors: FormState["errors"] = {}

  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    message: formData.get("message"),
  })

  // Return errors if validation fails
  if (!validatedFields.success) {
    errors = {
      ...errors,
      ...validatedFields.error.flatten().fieldErrors,
    }
  }

  // Validate consent checkboxes
  if (!formData.get("dataProcessing")) {
    errors.dataProcessing = ["Consent to data processing is required"]
  }

  if (!formData.get("privacyPolicy")) {
    errors.privacyPolicy = ["Agreement with the Privacy Policy is required"]
  }

  if (!formData.get("cookiePolicy")) {
    errors.cookiePolicy = ["Agreement with the Cookie Policy is required"]
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors: errors,
      success: false,
      message: "Please correct the errors in the form.",
    }
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real application, you would send this data to your API or email service
  // For example: await sendEmail(validatedFields.data)

  // Return success state
  return {
    success: true,
    message: "Thank you for your message! We'll be in touch shortly.",
  }
}
