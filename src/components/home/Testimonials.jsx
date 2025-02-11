import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Founder 1',
    image: 'https://readymadeui.com/profile_2.webp',
    feedback:
      'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.',
  },
  {
    id: 2,
    name: 'Mark Adair',
    title: 'Founder 2',
    image: 'https://readymadeui.com/profile_3.webp',
    feedback:
      'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.',
  },
  {
    id: 3,
    name: 'Simon Konecki',
    title: 'Founder 3',
    image: 'https://readymadeui.com/profile_4.webp',
    feedback:
      'The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.',
  },
];

export default function Testimonials() {
  return (
    <div className="mt-32">
      <div className="mb-16 text-center">
        <h2 className="md:text-4xl text-3xl font-extrabold">What our happy clients say</h2>
      </div>
      <div className="grid md:grid-cols-3 md:py-16 gap-8 max-w-7xl max-md:max-w-lg mx-auto relative">
        <div
          className="bg-green-100 lg:max-w-[70%] max-w-[80%] h-full w-full inset-0 mx-auto rounded-3xl absolute max-md:hidden"
        ></div>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md"
          >
            <div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <h4 className="whitespace-nowrap font-semibold mt-2">{testimonial.name}</h4>
              <p className="mt-1 text-xs">{testimonial.title}</p>
            </div>
            <div className="mt-4">
              <p>{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
