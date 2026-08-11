import { toast } from "sonner"


export const validator = (schema, value) => {
    const result = schema.safeParse(value)

    if (result.success) return true

    toast.error(result.error.issues[0].message)
    return false
}