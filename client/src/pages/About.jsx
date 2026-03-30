import React, { useEffect, useState } from 'react';
import { Target, Heart, Award, CheckCircle2, Terminal } from 'lucide-react';

const About = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_API_URL}/information/about`)
            .then(res => res.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch about data", err);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50/50 selection:bg-indigo-100">
            {/* Header / Hero */}
            <div className="bg-white border-b border-gray-200 pt-20 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">Our Mission & Story</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        {data?.mission}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Story Section with Image */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center mb-32">
                    <div>
                        <div className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full text-indigo-600 text-sm font-bold mb-8">
                            <Target size={18} />
                            <span>Origin Story</span>
                        </div>
                        <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">Bridging the gap between power and flexibility.</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10">
                            {data?.story}
                        </p>
                        <div className="space-y-6">
                            {data?.coreValues?.map((value, i) => (
                                <div key={i} className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center text-blue-600">
                                        {i === 0 && <Award size={24} />}
                                        {i === 1 && <Terminal size={24} />}
                                        {i === 2 && <Heart size={24} />}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-gray-900 mb-1">{value.title}</h3>
                                        <p className="text-gray-500">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 lg:mt-0 relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[3rem] blur-2xl opacity-10"></div>
                        <img 
                            src="/mission.png" 
                            alt="Our Team Vision" 
                            className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
                        />
                    </div>
                </div>

                {/* Tech Stack Grid */}
                <div className="bg-white rounded-[4rem] shadow-xl p-12 md:p-20 border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">The Engine Under the Hood</h2>
                        <p className="text-gray-500">We use the latest high-performance technologies to ensure a seamless experience.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                        {data?.stack?.map((tech, idx) => (
                            <div key={idx} className="bg-gray-50/80 backdrop-blur-sm border border-gray-200 p-6 rounded-3xl text-center transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1 group">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm mx-auto mb-4 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <CheckCircle2 size={24} />
                                </div>
                                <span className="font-bold text-gray-700 text-sm whitespace-pre-wrap">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Vision Quote */}
            <div className="py-32 text-center bg-gray-900">
                 <div className="max-w-3xl mx-auto px-4">
                    <p className="text-blue-400 font-bold uppercase tracking-widest mb-8">Our Vision</p>
                    <blockquote className="text-4xl md:text-5xl font-black text-white leading-tight">
                        "{data?.vision}"
                    </blockquote>
                 </div>
            </div>
        </div>
    );
};


export default About;