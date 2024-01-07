import React from 'react'
import hi from '../../assets/hi.jpg';
import hi2 from '../../assets/hi2.jpg';
import hi3 from '../../assets/hi3.jpg';
import hi4 from '../../assets/hi4.jpg';
import { useState } from "react";
import { motion } from "framer-motion";
import './Content.css';


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
function Content() {



    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    return (
        <div>
            <div class="hidden md:flex  bg-[#ebebed] pt-6 ">
                <div class="w-full bg-[#ebebed] h-12 text-center md:text-sm container mx-auto px-4 text-gray-400">
                    <p>Experience the visual splendor of Indian weddings through our lens. From the vibrant colors of the attire, to the intricate decorations, to the joyous expressions of the guests, we will capture it all in stunning photographs that you will treasure for a lifetime</p>

                </div>

            </div>

            <div class="flex  bg-[#ebebed] pt-4">
                <div class="w-full bg-[#ebebed] h-12 text-center md:text-sm container mx-auto px-4 text-gray-400">
                    <h1 className='md:text-3xl text-2xl'>Our Highlights
                    </h1>
                    <div className='mt-2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <hr class="bookends" />
                </div>

                    


                </div>

            </div>

            <div className='bg-[#ebebed] md:pt-7 '>
                <div class="md:flex  container mx-auto">
                    <div className="md:w-1/3  h-80 text-center flex flex-col gap-y-5 justify-center p-4">
                        <p className="">Unparalleled Elegance</p>
                        <h1 className="">Artfully Crafting Enduring Narratives</h1>
                        <span className=" text-xs ">
                            When you choose Adorn, you’re choosing the pinnacle of wedding
                            photography. Our commitment to excellence shines through each
                            frame, elegantly transforming your special occasions into enduring
                            visual stories. We invite you to experience the majestic moments
                            we’ve expertly crafted, demonstrating our unwavering dedication to
                            capturing the heart of your celebrations.
                        </span>
                    </div>
                    <div class="md:w-1/3 h-80 p-2">
                        <motion.div
                            initial={false}
                            animate={
                                isLoaded && isInView
                                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                            }
                            transition={{ duration: 1, delay: 1 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                            style={{ maxWidth: '100%', maxHeight: '100%', overflow: 'hidden' }}
                        >
                            <img src={hi} alt="" onLoad={() => setIsLoaded(true)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    </div>

                    <div className="md:w-1/3  h-80 text-center flex flex-col gap-y-5 justify-center p-4">
                        <p className="">Crafting Dreamscapes</p>
                        <h1 className="">Your Personalised Love Story Comes Alive</h1>
                        <span className=" text-xs ">
                            Adorn excels in shaping dream-like experiences that are in tune with the current trends of pre and post-wedding photography. We understand that each love story is unique and deserves a backdrop to match. With your inputs, we orchestrate pre and post-wedding shoots that align with your vision, forming the ideal canvas for your love story to flourish amidst the wedding frenzy.
                        </span>
                    </div>            </div>

            </div>

            <div className='bg-[#ebebed] pt-2'>
                <div class="md:flex  container mx-auto">
                    <div class="md:w-1/3 h-80 p-2">
                        <motion.div
                            initial={false}
                            animate={
                                isLoaded && isInView
                                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                            }
                            transition={{ duration: 1, delay: 1 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        >
                            <img src={hi3} alt="" onLoad={() => setIsLoaded(true)} />
                        </motion.div>
                    </div>
                    <div className="md:w-1/3  h-80 text-center flex flex-col gap-y-5 justify-center p-4">
                        <p className="">Capturing Moments, Creating Memories Affordably</p>
                        <h1 className="">Your Personalised Love Story Comes Alive</h1>
                        <span className=" text-xs ">
                            At Adorn, we seamlessly blend sophistication with affordability by leveraging the latest advancements in photography and videography technology. Our cutting-edge tools aren’t just equipment; they’re the key to weaving your story and making timeless memories accessible to you. With Adorn, quality and affordability converge, making us the go-to choice for premium wedding photography.
                        </span>
                    </div>
                    <div class="md:w-1/3 h-80 p-2">
                        <motion.div
                            initial={false}
                            animate={
                                isLoaded && isInView
                                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                            }
                            transition={{ duration: 1, delay: 1 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        >
                            <img src={hi2} alt="" onLoad={() => setIsLoaded(true)} />
                        </motion.div>
                    </div>
                </div>

            </div>
            <div className='bg-[#ebebed] pt-2'>
                <div class="md:flex  container mx-auto">
                    <div className="md:w-1/3  h-80 text-center flex flex-col gap-y-5 justify-center p-4">
                        <p className="">Personalised Keepsakes</p>
                        <h1 className="">From Pixels to Print, Your Story Preserved</h1>
                        <span className=" text-xs ">
                            At Adorn, we believe in transforming your digital memories into tangible keepsakes. Our customised photo books, encompassing precious snapshots of your celebration, and high-resolution digital albums, are crafted to endure the passage of time, much like your love. Trust Adron to immortalise your journey in a medium that’s as distinctive as your love story.
                        </span>
                    </div>
                    <div class="md:w-1/3 h-80 p-2">
                        <motion.div
                            initial={false}
                            animate={
                                isLoaded && isInView
                                    ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                    : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                            }
                            transition={{ duration: 1, delay: 1 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        >
                            <img src={hi4} alt="" onLoad={() => setIsLoaded(true)} />
                        </motion.div>
                    </div>
                    <div className="md:w-1/3  h-80 text-center flex flex-col gap-y-5 justify-center p-4">
                        <p className="">Prompt Delivery</p>
                        <h1 className="">Honouring Our Commitments</h1>
                        <span className=" text-xs ">
                            We understand the essence of time at Adorn. Our prompt post-event procedures, facilitated by an efficient core team, ensure your cherished moments are delivered on schedule. By maintaining continuous dialogue, we guarantee a smooth process, mutually agreed upon and followed through. Trust us to uphold our commitments, ensuring your experience with us is as memorable as the stories we capture.
                            crafted, demonstrating our unwavering dedication to capturing the heart of your celebrations.
                        </span>
                    </div>            </div>

            </div>


        </div>
    )
}

export default Content
