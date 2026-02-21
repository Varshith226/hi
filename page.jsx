'use client'; // Add this at the very top if you are using Next.js App Router

import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual photos and memories
const memories = [
    {
        id: 1,
        imgSrc: "/images/3.jpeg",
        caption: "This is literally the CUTEST PIC IN MY GALLERY and IDT WE HAVE A BETTER PIC THAN THIS.",
    },
    {
        id: 2,
        imgSrc: "/images/9.jpeg",
        caption: "You're literally MY ONLY SUNSHINE",
    },
    {
        id: 3,
        imgSrc: "/images/19.jpeg",
        caption: "Just look at you how pretty and cute you are, I am so lucky to have you as my GIRLFRIEND",
    },
    {
        id: 4,
        imgSrc: "/images/21.jpeg",
        caption: "I LOVE KISSING YOU everytime and I'll never get tired of it",
    }
];

export default function MemoryLane() {
    return (
        <div className="min-h-screen bg-stone-900 text-stone-100 font-sans selection:bg-rose-500/30">

            {/* Intro Section */}
            <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-5xl font-light tracking-wide mb-4"
                >
                    Hey Manognya,
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-lg md:text-xl text-stone-400 font-light"
                >
                    Keep scrolling...
                </motion.p>
            </section>

            {/* Memories Scrolling Section */}
            <section className="flex flex-col items-center w-full px-4">
                {memories.map((memory, index) => (
                    <motion.div
                        key={memory.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20%" }} // Triggers when the item is 20% into the viewport
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center mb-32 max-w-sm md:max-w-md w-full"
                    >
                        <div className="w-full aspect-[4/5] bg-stone-800 rounded-lg overflow-hidden shadow-2xl mb-6">
                            <img
                                src={memory.imgSrc}
                                alt={`Memory ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-center text-stone-300 text-lg leading-relaxed px-4">
                            {memory.caption}
                        </p>
                    </motion.div>
                ))}
            </section>

            {/* The Climax: The Apology */}
            <section className="min-h-screen flex flex-col items-center justify-center px-4 py-32 bg-stone-900 overflow-hidden relative">

                {/* Floating Hearts Animation (Background elements) */}
                <div className="absolute top-10 left-[10%] text-rose-500/10 text-6xl animate-pulse">♥</div>
                <div className="absolute top-1/4 right-[20%] text-rose-500/10 text-8xl animate-bounce" style={{ animationDuration: '4s' }}>♥</div>
                <div className="absolute bottom-1/4 left-[30%] text-rose-500/10 text-5xl animate-bounce">♥</div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="max-w-2xl w-full bg-[#fcf8f6] rounded-[2rem] p-8 md:p-14 shadow-2xl relative border border-rose-100/50"
                >
                    {/* Cute decorative tape */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-200/50 -rotate-2 rounded-sm shadow-sm backdrop-blur-md z-20" style={{ top: '-10px' }}></div>

                    {/* Internal Background hearts */}
                    <div className="absolute -top-10 -right-10 text-rose-200/40 text-9xl select-none mix-blend-multiply">♥</div>
                    <div className="absolute -bottom-10 -left-10 text-rose-200/40 text-[10rem] select-none mix-blend-multiply flex translate-y-6">♥</div>

                    <div className="relative z-10 text-left">
                        <h2 className="text-3xl md:text-5xl font-serif italic mb-8 text-rose-600 text-center tracking-wide">
                            My Dearest Manognya,
                        </h2>

                        <div className="space-y-6 text-stone-700 text-base md:text-[1.1rem] leading-relaxed font-serif">
                            <p>
                                I wanted to remind you of all the beautiful moments we've shared because they mean everything to me. I know I messed up, and I hate knowing that I upset you.
                            </p>
                            <p>
                                I shouldn't have done that yesterday and I am genuinely regretting it so much, I completely understood your pov how you would feel, me telling about our private things which includes you to your friend and I really don't know why am I fucking up things lately. I am really sorry for doing that I know it's your decision to tell or not.
                            </p>
                            <p className="font-semibold text-rose-800 bg-rose-100/60 p-4 rounded-xl border border-rose-200/50 shadow-sm text-center">
                                But PLEASE DON'T BE UPSET or DISTANT WITH ME I REALLY CAN'T TAKE THAT.
                            </p>
                            <p>
                                I love you so so so much I want you to be happy with me always if you're like finding it hard or sad with something I want you to be like I want my boyfriend, not getting upset with me. I know you felt very weird whatever happened I PROMISE YOU that this will never ever repeat again and I'll be always there for you no matter what happens I'll be always there for you.
                            </p>
                            <p>
                                I wanna baby you, take care of you as a responsible man and want you to be happy with me always, if things doesn't go right it'll only be me and you who'll sit and sort this out always.
                            </p>
                            <p className="text-center text-xl md:text-2xl font-medium mt-10 text-rose-500 italic pb-6 border-b border-rose-200/50">
                                You are my favorite person. I LOVE YOU SO MUCH BABY, and I promise to do better.
                            </p>
                        </div>

                        <div className="mt-12 text-right text-stone-700 font-serif">
                            <p className="italic text-lg mb-1">Yours always & forever,</p>
                            <p className="font-semibold text-3xl text-rose-600">Varshith ♥</p>
                        </div>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}