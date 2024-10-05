const Footer = () => {
    return (
        <footer class="font-sans bg-gray-900 text-gray-300">
            {/* Newsletter Subscription Section */}
            <div class="bg-gray-800 py-10"> {/* Increased padding */}
                <div class="container mx-auto px-6">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h2 class="text-2xl font-semibold text-white">
                                Subscribe to Our Newsletter
                            </h2>
                            <p class="mt-2 text-gray-400">
                                Get the latest updates, promotions, and news delivered right to your inbox.
                            </p>
                        </div>
                        <div class="flex flex-col md:flex-row gap-4 items-start">
                            <input 
                                type="email" 
                                class="w-full px-4 py-3 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                            <button class="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-500 transition">
                                SubScribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links and Information */}
            <div class="py-12">
                <div class="container mx-auto px-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Quick Links */}
                        <div>
                            <h3 class="font-bold text-white">Quick Links</h3>
                            <ul class="mt-4 space-y-2">
                                <li class="hover:text-blue-400 transition-colors">
                                    <a href="#">Home</a>
                                </li>
                                <li class="hover:text-blue-400 transition-colors">
                                    <a href="#">Who We Are</a>
                                </li>
                                <li class="hover:text-blue-400 transition-colors">
                                    <a href="#">Our Philosophy</a>
                                </li>
                            </ul>
                        </div>

                        {/* About Us */}
                        <div>
                            <h3 class="font-bold text-white">About Us</h3>
                            <ul class="mt-4 space-y-2">
                                <li class="hover:text-blue-400 transition-colors">
                                    <a href="#">Our Team</a>
                                </li>
                                <li class="hover:text-blue-400 transition-colors">
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </div>

                        {/* Connect with Us */}
                        <div>
                            <h3 class="font-bold text-white">Connect With Us</h3>
                            <ul class="mt-4 space-y-2">
                                <li class="hover:text-blue-400 transition-colors">
                                    Contact: <span class="text-gray-400">7620559249</span>
                                </li>
                                <li class="hover:text-blue-400 transition-colors">
                                    Email: <span class="text-gray-400">MORS4@gmail.com</span>
                                </li>
                                <li class="hover:text-blue-400 transition-colors">
                                    Address: <span class="text-gray-400">Pune</span>
                                </li>
                            </ul>
                        </div>

                        {/* Industries */}
                        <div>
                            <h3 class="font-bold text-white">Industries</h3>
                            <ul class="mt-4 space-y-2">
                                <li class="hover:text-blue-400 transition-colors">
                                    <a href="#">Retail & E-Commerce</a>
                                </li>
                                <li class="hover:text-blue-400 transition-colors">
                                    <a href="#">Information Technology</a>
                                </li>
                                <li class="hover:text-blue-400 transition-colors">
                                    <a href="#">Finance & Insurance</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Social Icons and Legal Section */}
            <div class="bg-gray-900 py-8"> {/* Increased padding */}
                <div class="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
                    <div class="flex gap-6 mb-4 lg:mb-0">
                        <a href="#" class="hover:text-blue-400 transition-colors">
                            <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="Facebook" class="hover:scale-110 transition-transform duration-300 ease-in-out" />
                        </a>
                        <a href="#" class="hover:text-blue-400 transition-colors">
                            <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="Twitter" class="hover:scale-110 transition-transform duration-300 ease-in-out" />
                        </a>
                        <a href="#" class="hover:text-blue-400 transition-colors">
                            <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="Instagram" class="hover:scale-110 transition-transform duration-300 ease-in-out" />
                        </a>
                        <a href="#" class="hover:text-blue-400 transition-colors">
                            <img src="https://www.svgrepo.com/show/94698/github.svg" width="30" height="30" alt="GitHub" class="hover:scale-110 transition-transform duration-300 ease-in-out" />
                        </a>
                    </div>

                    {/* Play Store and App Store Logos */}
                    <div class="flex gap-6 mb-4 lg:mb-0">
                        <a href="#" class="hover:text-blue-400 transition-colors">
                            <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="Play Store" class="hover:scale-105 transition-transform duration-300 ease-in-out" />
                        </a>
                        <a href="#" class="hover:text-blue-400 transition-colors">
                            <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="App Store" class="hover:scale-105 transition-transform duration-300 ease-in-out" />
                        </a>
                    </div>

                    <p class="text-gray-500 text-sm text-center lg:text-left mt-4 lg:mt-0">
                        © 2024 Your Company Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

