import { useMemo, useState } from "react";
import "./App.css";
import Tab from "./Tab";
import { AdvancementDetails, Advancements, advancements, Criteria } from "./advancementList";

const ADVANCEMENT_CATEGORIES = [
    { id: "story", name: "Story", icon: "stone.png", background: "stone" },
    { id: "nether", name: "Nether", icon: "nether.png", background: "nether" },
    { id: "end", name: "The End", icon: "end.png", background: "end" },
    { id: "adventure", name: "Adventure", icon: "adventure.png", background: "sand" },
    { id: "husbandry", name: "Husbandry", icon: "husbandry.png", background: "farm" },
];

export function App() {
    const [selectedCategory, setSelectedCategory] = useState("story");
    const [file, setFile] = useState<FileList | null>();
    const [userInput, setUserInput] = useState<Advancements>();
    const [hideCompleted, setHideCompleted] = useState(false);

    function handleSubmit(e: any) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (ev) => {
            const text = ev.target && (ev.target.result as string);
            const json = text && JSON.parse(text);
            setUserInput(json);
        };
        file && reader.readAsText(file[0]);
    }

    function handleTabClick(categoryId: string) {
        setSelectedCategory(categoryId);
    }

    function handleToggleHideCompleted() {
        setHideCompleted(!hideCompleted);
    }

    const countDone = useMemo(() => {
        if (!userInput) {
            return 0;
        }
        let count = 0;
        for (const x in advancements) {
            if (userInput.hasOwnProperty(x) && userInput[x].done) {
                count++;
            }
        }
        return count;
    }, [userInput]);

    const categoryProgress = useMemo(() => {
        if (!userInput) return {};

        const progress: { [key: string]: { done: number; total: number } } = {};

        ADVANCEMENT_CATEGORIES.forEach(category => {
            const categoryAdvancements = Object.entries(advancements).filter(([key]) =>
                key.startsWith(`minecraft:${category.id}/`)
            );

            const done = categoryAdvancements.filter(([key]) =>
                userInput[key] && userInput[key].done
            ).length;

            progress[category.id] = { done, total: categoryAdvancements.length };
        });

        return progress;
    }, [userInput]);

    const currentCategoryAdvancements = useMemo(() => {
        return Object.entries(advancements).filter(([key]) =>
            key.startsWith(`minecraft:${selectedCategory}/`)
        );
    }, [selectedCategory]);

    const currentBackground = ADVANCEMENT_CATEGORIES.find(cat => cat.id === selectedCategory)?.background || "stone";

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            {/* Header */}
            <div className="bg-black bg-opacity-50 border-b-4 border-gray-700">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-4xl font-minecraft text-yellow-400 text-center mb-4">
                        Minecraft Advancement Tracker
                    </h1>

                    <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-6 border-2 border-gray-600">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col space-y-2">
                                <label className="text-white font-minecraft text-lg">
                                    Upload World Data:
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) => setFile(e.target.files)}
                                    accept=".json"
                                    className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-minecraft file:bg-yellow-600 file:text-black hover:file:bg-yellow-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-minecraft font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                            >
                                Load World Data
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {userInput && (
                    <h2 className="text-2xl font-minecraft text-yellow-400 mb-4">
                        Overall Progress: {countDone} / {Object.keys(advancements).length}
                    </h2>
                )}

                <div className="flex justify-center mb-8">
                    <div className="bg-gray-800 rounded-lg p-2 border-2 border-gray-600">
                        <div className="flex space-x-2">
                            {ADVANCEMENT_CATEGORIES.map((category) => {
                                const progress = categoryProgress[category.id];
                                const percentage = progress ? Math.round((progress.done / progress.total) * 100) : 0;
                                return (
                                    <div className="flex flex-col items-center p-2 min-w-[120px]" key={category.id}>
                                        <Tab
                                            key={category.id}
                                            onClick={() => handleTabClick(category.id)}
                                            isSelected={category.id === selectedCategory}
                                            icon={category.icon}
                                            name={category.name}
                                        />
                                        <div key={category.id} className="text-center mt-2 w-full">
                                            <div className="text-yellow-400 font-minecraft text-lg">
                                                {progress ? `${progress.done}/${progress.total}` : '0/0'}
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                                                <div
                                                    className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {userInput && (
                    <div className="flex justify-center mb-6">
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={hideCompleted}
                                onChange={handleToggleHideCompleted}
                            />
                            <div className="relative w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-600"></div>
                            <span className="ms-3 text-white font-minecraft">
                                Hide completed advancements
                            </span>
                        </label>
                    </div>
                )}

                {userInput && (
                    <div className={`rounded-lg p-6 border-2 border-gray-600 min-h-96 relative overflow-hidden ${currentBackground === 'stone' ? 'bg-stone' :
                        currentBackground === 'nether' ? 'bg-nether' :
                            currentBackground === 'end' ? 'bg-end' :
                                currentBackground === 'farm' ? 'bg-farm' :
                                    currentBackground === 'sand' ? 'bg-sand' : 'bg-stone'
                        }`}>
                        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl font-minecraft text-yellow-400 mb-6 text-center">
                                {ADVANCEMENT_CATEGORIES.find(cat => cat.id === selectedCategory)?.name} Advancements
                            </h2>
                            <div className="space-y-4">
                                {currentCategoryAdvancements.map(([advKey, advancement]) => (
                                    <AdvancementDisplay
                                        key={advKey}
                                        advancement={advancement}
                                        user={userInput[advKey]}
                                        hideCompleted={hideCompleted}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {!userInput && (
                    <div className="text-center py-16">
                        <div className="bg-gray-800 rounded-lg p-8 border-2 border-gray-600 max-w-2xl mx-auto">
                            <h2 className="text-3xl font-minecraft text-yellow-400 mb-4">
                                Welcome to the Minecraft Advancement Tracker!
                            </h2>
                            <p className="text-white font-minecraft text-lg mb-6">
                                Upload your world's advancement data to see which achievements you're missing and track your progress across all categories.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                <div className="bg-gray-700 rounded-lg p-4">
                                    <h3 className="text-yellow-400 font-minecraft text-lg mb-2">How to use:</h3>
                                    <ol className="text-white font-minecraft text-sm space-y-1">
                                        <li>1. Open your Minecraft world folder</li>
                                        <li>2. Navigate to "advancements" folder</li>
                                        <li>3. Find the player's advancement file</li>
                                        <li>4. Upload the JSON file here</li>
                                    </ol>
                                </div>
                                <div className="bg-gray-700 rounded-lg p-4">
                                    <h3 className="text-yellow-400 font-minecraft text-lg mb-2">Features:</h3>
                                    <ul className="text-white font-minecraft text-sm space-y-1">
                                        <li>• Track progress by category</li>
                                        <li>• Hide completed advancements</li>
                                        <li>• View detailed criteria</li>
                                        <li>• Minecraft-style interface</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

interface AdvancementProps {
    advancement: AdvancementDetails;
    user?: AdvancementDetails;
    hideCompleted: boolean;
}

function AdvancementDisplay(props: AdvancementProps) {
    const { advancement, user, hideCompleted } = props;
    const hasCriteria = !!advancement.criteria;
    const [showCriteria, setShowCriteria] = useState(hasCriteria);

    if (user?.done && hideCompleted) {
        return null;
    }

    const isCompleted = user?.done || false;

    return (
        <div className={`bg-gray-800 rounded-lg p-4 border-2 ${isCompleted ? 'border-green-500' : 'border-gray-600'} transition-all duration-200 hover:border-yellow-400`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isCompleted ? 'bg-green-500' : 'bg-red-500'}`}>
                        {isCompleted ? '✓' : '✗'}
                    </div>
                    <h3 className={`font-minecraft text-xl ${isCompleted ? 'text-green-400' : 'text-white'}`}>
                        {advancement.title}
                    </h3>
                </div>
                {hasCriteria && (
                    <button
                        className="bg-gray-700 hover:bg-gray-600 text-white font-minecraft px-3 py-1 rounded transition-colors duration-200"
                        onClick={() => setShowCriteria(!showCriteria)}
                    >
                        {showCriteria ? "▼ Hide Details" : "▶ Show Details"}
                    </button>
                )}
            </div>

            {showCriteria && advancement.criteria && (
                <div className="mt-4 pl-11 space-y-2">
                    {advancement.criteria.map((criterium) => (
                        <CriteriaEntry
                            key={criterium.value}
                            criteria={criterium}
                            done={user?.criteria?.hasOwnProperty(criterium.value)}
                            hideCompleted={hideCompleted}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

interface CriteriaProps {
    criteria: Criteria;
    done?: boolean;
    hideCompleted: boolean;
}

function CriteriaEntry(props: CriteriaProps) {
    const { criteria, done, hideCompleted } = props;

    if (done && hideCompleted) {
        return null;
    }

    return (
        <div className={`flex items-center space-x-2 ${done ? 'text-green-400' : 'text-gray-300'}`}>
            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${done ? 'bg-green-500' : 'bg-red-500'}`}>
                {done ? '✓' : '✗'}
            </div>
            <span className="font-minecraft">{criteria.title}</span>
        </div>
    );
}
