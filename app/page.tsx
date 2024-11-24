"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import Image from "next/image";
import { motion } from "framer-motion";
import HomeCard from "@/components/HomeCard";
import Footer from "@/components/Footer";
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export default function Home() {
  return (
    <main className="max-w-[920px] mx-auto w-full">
      <BackgroundBeamsWithCollision>
        <motion.div
          className="text-center mt-16 font-bold text-6xl"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <h1>I&apos;m Adhis.</h1>
          <h2 className="mt-1">Web Programmer.</h2>
          <p className="font-normal mt-5 text-base text-[#818794]">
            Tech Enthusiast | Frontend Developer | Backend Developer
          </p>
        </motion.div>
      </BackgroundBeamsWithCollision>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <HomeCard className="basis-5/12 relative p-8 w-5/12">
            <h1 className="text-lg">Current Project</h1>
            <p className="text-[#818794] mt-1">Current works in progress.</p>
            <motion.div
              className="absolute w-[400px] -right-44 bottom-1 -rotate-[15deg] rounded-2xl overflow-hidden"
              initial={{ y: 100, opacity: 0, rotate: "-15deg" }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "linear" }}
            >
              <Image
                width={400}
                height={400}
                alt="Current Project"
                src={"/images/bagian-home.png"}
              />
            </motion.div>
          </HomeCard>
          <HomeCard className="basis-7/12 w-7/12">
            <div className="p-8 relative">
              <h1 className="text-lg">My Expertise</h1>
              <p className="text-[#818794] mt-1">
                Explore my expertise and see how I bring ideas to life with
                code.
              </p>
            </div>
            <div className="w-full    rounded-md   overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="fast"
              />
            </div>
            <div className="w-full  -mt-2  rounded-md   overflow-hidden">
              <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="fast"
              />
            </div>
          </HomeCard>
        </div>
        <HomeCard className="relative h-[300px] p-8">
          <h1 className="text-lg">My Expertise</h1>
          <p className="text-[#818794] mt-1">
            Explore my expertise and see how I bring ideas to life with code.
          </p>
          <motion.div
            className="absolute w-[500px] right-0 -bottom-12   rounded-2xl overflow-hidden"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "linear" }}
          >
            <Image
              width={600}
              height={600}
              className="w-full"
              alt="Working Project"
              src={"/images/working.png"}
            />
          </motion.div>
        </HomeCard>

        <Footer />
      </div>
    </main>
  );
}
