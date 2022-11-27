import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg p-4 mx-auto w-full flex flex-col justify-center h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
                <p className='text-xl mt-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus velit excepturi fugiat, exercitationem officiis qui, eligendi vel amet totam maiores facere dignissimos similique placeat sed maxime. Perspiciatis officia aliquam pariatur?</p>
        
                <br />
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel hic repellat officia suscipit doloribus, ipsa, expedita mollitia nam nihil illo, quis soluta dolor eos. Aperiam perferendis assumenda accusantium sint quia dolores eligendi totam officiis veniam, modi animi ullam. Deleniti, praesentium doloremque velit aspernatur maiores aliquid asperiores amet quibusdam ex?</p>
        </div>
    </div>
  )
}

export default About