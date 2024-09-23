import headers from "@/lang/headers";

export enum Paths {
    LANDING = "/",
    LOGIN = "/login",
    NOT_FOUND = "NOT_FOUND",
}

export const privateRoutes: { path: Paths, header: headers }[] = []