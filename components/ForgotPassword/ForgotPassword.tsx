'use client';

import { Input } from '@nextui-org/react'
import { MdEmail } from "react-icons/md";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

const ForgotPassword = () => {

    const FormSchema = z.object({
        email: z
          .string()
          .min(1, 'Email is required')
          .email('Invalid email'),
    })

    type InputType = z.infer<typeof FormSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<InputType>({
        resolver: zodResolver(FormSchema),
      })

    const submitRequest: SubmitHandler<InputType> = async (data) => {
        console.log({ data })
    }

  return (
    <div className='grid place-items-center mt-[20px]'>
        <div className='p-5 bg-[#2d3136] shadow-lg rounded-lg border-t-4 border-[#3d95ec]'>
            
            <h1 className="text-xl font-bold my-4">
                Forgot Password
            </h1>

            <form onSubmit={handleSubmit(submitRequest)} className='flex flex-col gap-3 w-[400px]'>
                <Input
                    {...register('email')}
                    label="Email"
                    type="email"
                    className='text-black'
                    startContent={<MdEmail />}
                    placeholder='Email'
                />

                <button
                    type="submit"
                    className="bg-[#3d95ec] gap-[10px] hover:bg-[#51a8ff] transition-all font-bold cursor-pointer px-6 py-2">
                    Send
                </button>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword
