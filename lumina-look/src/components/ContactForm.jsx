import { useState } from 'react';

function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const handleChange = (ev) => {
		setFormData({ ...formData, [ev.target.name]: ev.target.value });
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		console.log(formData);
		setFormData({ name: '', email: '', message: '' });
		setShowSuccessMessage(true);
		setTimeout(() => {
			setShowSuccessMessage(false);
		}, 8000);
	};

	return (
		<section id='contact' className='bg-lightGreen bg-opacity-25 py-12'>
			<div className='max-w-4xl mx-auto px-4'>
				<h2 className='text-3xl font-semibold text-accentOrange mb-6'>Contacto</h2>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<label htmlFor='name' className='block text-gray-700 font-medium'>
							Nombre
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-600'
							required
						/>
					</div>
					<div>
						<label htmlFor='email' className='block text-gray-700 font-medium'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-600'
							required
						/>
					</div>
					<div>
						<label htmlFor='message' className='block text-gray-700 font-medium'>
							Mensaje
						</label>
						<textarea
							id='message'
							name='message'
							value={formData.message}
							onChange={handleChange}
							rows='4'
							className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-600'
							required
						></textarea>
					</div>
					<div>
						<button
							type='submit'
							className='bg-accentOrange text-white px-6 py-3 rounded-md hover:bg-bgGreen focus:outline-none'
						>
							Enviar
						</button>
					</div>
				</form>
				{showSuccessMessage && <p className='mt-4 text-green-600'>¡Mensaje enviado con éxito!</p>}
			</div>
		</section>
	);
}

export default ContactForm;
