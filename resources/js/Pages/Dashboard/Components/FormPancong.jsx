
"use client"

import { z } from "zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { router } from "@inertiajs/react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
    menu: z.string().min(2, { message: "Nama menu minimal 2 karakter." }),
    harga: z.coerce.number().min(1000, { message: "Harga minimal Rp 1000." }),
    gambar: z.any().optional(),
})

export function PancongForm({ existing = null, onClose = () => { } }) {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            menu: existing?.menu ?? "",
            harga: existing?.harga ?? 0,
        },
    })

    useEffect(() => {
        if (existing) {
            form.reset({
                menu: existing.menu,
                harga: existing.harga,
            })
        }
    }, [existing])

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append("menu", data.menu)
        formData.append("harga", data.harga)
        if (data.gambar instanceof File) {
            formData.append("gambar", data.gambar)
        }

        if (existing) {
            router.post(route("pancong.update", existing.id), formData, {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    toast.success("Pancong berhasil diupdate")
                    onClose()
                },
                onError: () => toast.error("Gagal update pancong"),
            })
        } else {
            router.post(route("pancong.store"), formData, {
                forceFormData: true,
                onSuccess: () => {
                    toast.success("Pancong berhasil ditambahkan")
                    form.reset()
                    onClose()
                },
                onError: () => toast.error("Gagal tambah pancong"),
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="menu"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama Menu</FormLabel>
                            <FormControl>
                                <Input placeholder="Pancong Keju" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="harga"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Harga</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="15000" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="gambar"
                    render={({ field: { onChange } }) => (
                        <FormItem>
                            <FormLabel>Gambar</FormLabel>
                            <FormControl>
                                <Input type="file" onChange={(e) => onChange(e.target.files?.[0])} />
                            </FormControl>
                            <FormDescription>
                                Biarkan kosong jika tidak ingin mengganti gambar.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">{existing ? "Update" : "Simpan"}</Button>
            </form>
        </Form>
    )
}
