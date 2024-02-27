from gtts import gTTS

# Replace "YOUR_TEXT" with the text you want to convert to audio
text = """
    Ladies and gentlemen, esteemed guests, and fellow innovators, I am thrilled to present to you today the prototype of a groundbreaking project that promises to redefine how we interact with computers and operating systems. Allow me to introduce to you: Gen-X.

Gen-X is not just another voice assistant. It is the culmination of cutting-edge AI technology combined with the versatility of a shell executor, designed to streamline and revolutionize your computing experience across various operating systems.

Imagine a world where you can effortlessly navigate through complex tasks on your computer simply by speaking commands naturally, without the need to memorize intricate commands or navigate through menus. Gen-X brings this vision to life.

With Gen-X, you can seamlessly execute shell commands on a variety of operating systems, from Windows to macOS to Linux, all with the power of your voice. Whether you're managing files, running scripts, or performing system configurations, Gen-X is your intelligent companion, ready to assist you at every step.

But Gen-X is more than just a shell executor. It is the foundation of a future AI-powered operating system. Imagine an operating system that understands your preferences, anticipates your needs, and adapts to your workflow seamlessly. Gen-X paves the way for this vision, serving as the cornerstone of a next-generation computing environment.

Picture a world where your operating system learns from your interactions, continuously refining its capabilities to better serve you. Gen-X is the first step towards realizing this future, harnessing the power of AI to create a personalized computing experience like never before.

As we unveil this prototype today, I invite you to envision the endless possibilities that Gen-X brings to the table. From simplifying complex tasks to shaping the future of computing, Gen-X is poised to redefine the way we interact with technology.

Together, let us embark on this journey towards a future where AI-driven innovation empowers us to achieve more than we ever thought possible. Thank you.
"""

# Choose a language for the audio (optional, defaults to 'en' for English)
language = 'en'

# Create an instance of the gTTS object
tts = gTTS(text=text, lang=language)

# Save the audio as a .mp3 file named "prototype.mp3"
tts.save("prototype.mp3")

print("Audio file saved successfully as prototype.mp3")
