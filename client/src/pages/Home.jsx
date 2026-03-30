import { useEffect, useState } from 'react';
import { Rocket, Shield, Layout, ArrowRight, Zap, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router';

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_API_URL}/information/home`)
            .then(res => res.json())
            .then(json => {
                setData(json);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch home data", err);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
    );

    const iconMap = {
        Zap: <Zap size={24} />,
        Shield: <Shield size={24} />,
        Layout: <Layout size={24} />,
        Rocket: <Rocket size={24} />
    };

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="mb-12 lg:mb-0 text-center lg:text-left">
                            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-sm font-bold mb-8 animate-bounce">
                                <Star size={16} fill="currentColor" />
                                <span>{data?.stats?.environment || 'Production Ready'}</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight">
                                {(data?.title || "Master Your Data with Precision").split(' ').map((word, i) => (
                                    <span key={i} className={i >= 3 ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" : ""}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </h1>
                            
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {data?.subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <Link 
                                    to="/person"
                                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
                                >
                                    Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
                                </Link>
                                <div className="flex -space-x-3 overflow-hidden">
                                     {data?.heroStats?.map((stat, i) => (
                                         <div key={i} className="flex items-center text-sm font-semibold text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                                             {stat}
                                         </div>
                                     ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                            <img 
                                src="/hero.png" 
                                alt="Modern Data System Illustration" 
                                className="relative rounded-3xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
            </section>

            {/* Why Choose Our Platform Section */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Why Choose Our Platform?</h2>
                        <p className="text-xl text-gray-600">We provide the tools you need to build faster, secure your data, and deliver modern experiences.</p>
                        <div className="h-2 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-8"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        {data?.whyChooseUs?.map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:from-blue-600 group-hover:to-indigo-700 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                                    {iconMap[item.icon] || <CheckCircle size={24} />}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Trusted By / Call to Action */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative z-10">
                        Ready to elevate your data management?
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 relative z-10 max-w-xl mx-auto">
                        Join thousands of developers using our platform to build the future of full-stack applications.
                    </p>
                    <Link 
                        to="/person" 
                        className="inline-flex items-center bg-white text-gray-900 px-10 py-4 rounded-xl font-black hover:bg-blue-50 transition-colors relative z-10"
                    >
                        Get Started Now <ArrowRight className="ml-2" size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;