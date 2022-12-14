import Head from "next/head";

import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from "@heroicons/react/outline";
import React, { useEffect } from "react";

import auth from "../constants/hooks/useAuth";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
    {
        question: "What is DEInclusive?",
        answer: "DEInclusive is a Platform where you will get an opportunity to directly interact with employers & based on your talent via events & skills employers will hire you.",
    },
    {
        question: "Do you charge an amount from the job seekers who are willing to take part in your events??",
        answer: "We do not charge any fees from job seekers.",
    },
    {
        question: "Do we need to sign up to join the events?",
        answer: "Yes, you need to sign up to join the event.",
    },
    {
        question: "How many events can job seekers attend in a month?",
        answer: "There is no limit for the job seeker to attend the event.",
    },
    {
        question: "Which community does DEInclusive help to get jobs?",
        answer: "We help all those communities that are backward and face discrimination & challenges to get a job.",
    },
    // More questions...
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const features = [
    {
        name: "Recruit On DEInclusive",
        description: "Attend a webinar and the employer will hire according to your skillset or you can directly apply to the suitable job.",
        icon: GlobeAltIcon,
    },
    {
        name: "Build & Construct Career Roadmap",
        description: "Confused/Under confidence or facing challenges in communication. Don't worry! Our expert soft-skill trainer will help you.",
        icon: ScaleIcon,
    },
    {
        name: "Encourage Underserved Communities",
        description: "We encourage and help the underserved communities to get free and fair opportunities to grow career without any social discrimination.",
        icon: LightningBoltIcon,
    },
    {
        name: "Free Interaction Webinar For All",
        description: "On community demand, we organize different events that help to groom personality & get a high-paid salary.",
        icon: AnnotationIcon,
    },
];

const eventfeatures = [
    {
        name: "Career Fair",
        description: "We organize a career fair where employers hunt for diverse talent & skilled workforce. ",
    },
    {
        name: "Job Openings",
        description: "We mainly focused on underserved communities and provide jobs to them without any human injustice.",
    },
    {
        name: "Career Awareness",
        description: "We help you to describe your career attitudes, your knowledge, and your life experiences.",
    },
    {
        name: "Recruiting",
        description: "We provide an interactive platform where recruiters catch up with diverse talents as per their requirements.",
    },
    {
        name: "Startup Events",
        description:
            "We help startups to grow at 10X  times and provide all necessary mentorship to the startup.We help minimise cost of talent acquisition and also help in retaining talent.",
    },
    {
        name: "Career Gurus",
        description: "Master Gurus can help a person overcome their doubts and weakness and get a job in the skill they are good at.",
    },
];

// export async function getServerSideProps(context) {
//   const { res } = context;
//   const session = await getSession(context);

//   if (!session) {
//     res.writeHead(302, {
//       Location: "/",
//     });
//     return res.end();
//   }
//   console.log("session", session);
//   return {
//     props: { session },
//   };
// }

const Home = () => {
    const getUser = async () => {
        const usr = await auth.getCurrentUser(() => {});
        console.log("usr", usr);
    };
    const signIn = async () => {
        const usrs = await auth.signIn("manager.avoxonholdings@gmail.com", "qwertyuiop", () => {});
        //const usrs = await auth.signInWithGoogle(() => {});
        console.log("usr gg", usrs);
    };
    const signUp = async () => {
        const usrs = await auth.signUp(
            "manager.avoxonholdings@gmail.com",
            "qwertyuiop",
            {
                name: {
                    first: "Avoxon",
                    last: "Hasan",
                },
                email: "manager.avoxonholdings@gmail.com",
            },
            () => {}
        );
        console.log("usr up", usrs);
    };
    const confirm = async () => {
        const usrs = await auth.confirmSignUp("manager.avoxonholdings@gmail.com", "993030", () => {});
    };
    return (
        <div>
            <Head>
                <title>DEInclusive</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <button onClick={getUser}>Get User</button>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signUp}>Sign Up</button>
            <button onClick={confirm}>Confirm</button>
            <main>
                <>
                    <div className="bg-gray-50">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                            <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                                <h2 className="text-center text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl sm:tracking-tight">Frequently asked questions</h2>
                                <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                                    {faqs.map((faq) => (
                                        <Disclosure as="div" key={faq.question} className="pt-6">
                                            {({ open }) => (
                                                <>
                                                    <dt className="text-lg">
                                                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                                            <span className="font-medium text-gray-900">{faq.question}</span>
                                                            <span className="ml-6 h-7 flex items-center">
                                                                <ChevronDownIcon
                                                                    className={classNames(open ? "-rotate-180" : "rotate-0", "h-6 w-6 transform")}
                                                                    aria-hidden="true"
                                                                />
                                                            </span>
                                                        </Disclosure.Button>
                                                    </dt>
                                                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                        <p className="text-base text-gray-500">{faq.answer}</p>
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </>
            </main>
        </div>
    );
};

export default Home;

Home.layout = "main";

// export async function getStaticProps() {
//   const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// }
