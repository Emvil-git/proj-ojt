export type AccType = "trainee" | "trainee" | "admin"

export type Account = {
    userName: string,
    password: string,
    accType: string
}

export type User = {
    name: string,
    userName: string,
    department: string,
    school: string,
    reqdHours: number,
}