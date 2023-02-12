import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Formulario = ()=>{
  const sendEmail = (event) =>{
  event.preventDefault();
   emailjs.sendForm('service_224j5hy','template_i4cdhbo',event.target,'V77rTj72eKT_6KpPi')
  }
  
  const { register, formState:{ errors },handleSubmit } = useForm();
    return(
    <div className='h-screen flex items-center justify-center '>
     <div className='bg-gray-200 max-h-full w-96 max-w-screen-sm mt-3 mb-3 border-2 rounded-3xl pt-5 px-5 py-6 resize:none shadow-2xl 
      shadow-black border-x-4'>
       <h2 className='text-center bg-blue-600 p-3 text-3xl font-bold rounded-tl-lg 
        rounded-tr-lg '>form</h2>
       <form onSubmit={handleSubmit(sendEmail)}>
         <div className='mt-8'>
             <label className='text-lg font-bold'>Name</label>
             <input className='w-full border-2 border-gray-500 rounded-xl p-2px mt-2px bg-transparent' type="text" 
              {...register('nombre',{ required:true, maxLength:20 })} placeholder='max 20 characters'/>
             {errors.nombre?.type === 'required' && <p>the name field is required
              </p>}
             {errors.nombre?.type === 'maxLength' && <p><mark>field must be less than 20  
             characters</mark>
              </p>}
         </div>
          <label className='text-lg font-bold'>Message</label>
           <textarea 
           className='w-full border-2 border-gray-500 rounded-xl p-1 mt-1 bg-transparent resize-none' name='user-message' 
           id='' placeholder='enter a maximun of 100 characters' maxlength='100' required cols='20' rows='8'> 
           </textarea>
         <div>
             <label className='text-lg font-bold'>email</label>
             <input
              className='w-full border-2 border-gray-500 rounded-xl p-1 mt-1 bg- transparent'type='text' 
              {...register('email',{ 
              pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })} placeholder='luismagnum1@gmail.com'/>
             {errors.email?.type === 'pattern' && <p>the email format is incorrect</p>}
         </div>
         <div className='flex align-items-center justify-center gap-4 w-46 max-w-screen-sm'>
         <input className=' active:scale-[.98] active:duration-100 hover:scale-[1.01] ease-in-out 
          transition-all bg-slate-800 text-white mt-3 px-4 py-1 rounded-xl text-2xl font-bold 
          hover:bg-slate-900'type="submit" value="Send"/>
          <input className='active:scale-[.98] active:duration-100 hover:scale-[1.01] ease-in-out 
          transition-all bg-slate-800 text-white mt-3 px-4 py-1 rounded-xl text-2xl font-semibold 
          hover:bg-slate-900'type="reset" value="Reset"/>
          </div>
       </form>
     </div>
    </div>
         
     );
 }
 

export default Formulario
