import { atom } from "jotai";

export const authAtom = atom<{username : string} | null>(null)