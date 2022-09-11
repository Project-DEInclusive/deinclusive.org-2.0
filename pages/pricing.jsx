import Head from "next/head";

import { CheckCircleIcon } from "@heroicons/react/solid";

const features = [
    "Vitae in pulvinar odio id utobortis in inter.",
    "Sed sed id viverra viverra augue eget massa.",
    "Urna, gravida amet, a, integer venenatis.",
    "Lobortis sed pharetra amet vitae eleifend.",
    "Ullamcorper blandit a consequat donec elit aoreet.",
    "Dolor quo assumenda.",
    "Esse rerum distinctio maiores maiores.",
    "Eos enim officiis ratione.",
    "Tempore molestiae aliquid excepturi.",
    "Perspiciatis eveniet inventore eum et aliquam.",
];

const includedFeaturesPro = ["resource 1", "resource 2", "resource 3", "resource 4"];
const includedFeaturesEvents = ["resource 1", "resource 2", "resource 3", "resource 4"];

const Pricing = () => {
    return (
        <>
            <Head>
                <title>Pricing</title>
            </Head>
            <div>
                <div className="bg-gray-100">
                    <div className="pt-12 sm:pt-16 lg:pt-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Let&apos;s find the right plan for you</h2>
                                <p className="mt-4 text-xl text-gray-600">We&#39;ve made it easy to get started with our platform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8  pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
                        <div className="relative">
                            <div className="absolute inset-0 h-1/2 bg-gray-100" />
                            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                                    <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                                        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Organize Your Event with Us.</h3>
                                        <p className="mt-6 text-base text-gray-500">
                                            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.
                                        </p>
                                        <div className="mt-8">
                                            <div className="flex items-center">
                                                <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">What&#39;s included</h4>
                                                <div className="flex-1 border-t-2 border-gray-200" />
                                            </div>
                                            <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                                {includedFeaturesPro.map((feature) => (
                                                    <li key={feature} className="flex items-start lg:col-span-1">
                                                        <div className="flex-shrink-0">
                                                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                                        </div>
                                                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                                        <p className="text-lg leading-6 font-medium text-gray-900">Pay once, own it forever</p>
                                        <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                                            <span>$499</span>
                                            <span className="ml-3 text-xl font-medium text-gray-500">USD</span>
                                        </div>
                                        <p className="mt-4 text-sm">
                                            <a href="#" className="font-medium text-gray-500 underline">
                                                Learn about our events
                                            </a>
                                        </p>
                                        <div className="mt-6">
                                            <div className="rounded-md shadow">
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                                                >
                                                    Get Access
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-sm">
                                            <a href="#" className="font-medium text-gray-900">
                                                Contact DEI team for
                                                <span className="font-normal text-gray-500"> more info.</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-lg mt-10 mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                                    <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                                        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                                            Pro Membership <span className="bg-purple-500 text-white rounded-full text-sm px-3 py-1 font-medium">Limited time offer</span>
                                        </h3>
                                        <p className="mt-6 text-base text-gray-500">
                                            Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.
                                        </p>
                                        <div className="mt-8">
                                            <div className="flex items-center">
                                                <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">What&#39;s included</h4>
                                                <div className="flex-1 border-t-2 border-gray-200" />
                                            </div>
                                            <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                                                {includedFeaturesEvents.map((feature) => (
                                                    <li key={feature} className="flex items-start lg:col-span-1">
                                                        <div className="flex-shrink-0">
                                                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                                        </div>
                                                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                                        <div className="mt-4  flex items-center justify-center text-5xl font-extrabold text-gray-900">
                                            <span className="line-through text-gray-400 mt-2 font-semibold text-3xl">$99</span>

                                            <span>$49</span>
                                            <span className="ml-3 text-xl font-medium text-gray-500">USD/mo</span>
                                        </div>
                                        <p className="mt-4 text-sm">
                                            <a href="#" className="font-medium text-gray-500 underline">
                                                Learn about our membership policy
                                            </a>
                                        </p>
                                        <div className="mt-6">
                                            <div className="rounded-md shadow">
                                                <a
                                                    href="#"
                                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                                                >
                                                    Get Access
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-sm">
                                            <a href="#" className="font-medium text-gray-900">
                                                Contact DEI team for
                                                <span className="font-normal text-gray-500"> more info.</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;

Pricing.layout = "main";
