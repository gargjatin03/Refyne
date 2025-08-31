import Home from "./components/Home";
const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 py-8 px-4 ">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-gray-400 mb-2 justify-center hover:scale-112 transition-transform duration-400">
                    AI Image Enhancer{" "}
                </h1>
                <p className="text-s text-gray-300 hover:scale-115 transform-fill duration-700">
                    Upload your Image and let AI to Enhance in seconds :)
                </p>
            </div>

            <Home />

            <div className="text-sm text-gray-500 mt-6 hover:scale-115 transform-flat duration-400">
                Powered By Refyne
            </div>
        </div>
    );
};

export default App;