import React, { useState } from 'react'

const FormNewPost = () => {

  const [formData, setFormData] = useState<FormData>()

  return (
    <form className='max-w-6xl mx-auto p-4'>
      <div className='mb-4'>
        <input
          type="text"
          name='title'
          placeholder='Enter title'
        />
      </div>
      <div className="mb-4">
        <textarea name="content"
          rows={5}
          placeholder='Enter content'
        />
      </div>

      <button type='submit'>Submit</button>
    </form>
  )
}

export default FormNewPost