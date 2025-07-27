export interface Memory {
  id: number;
  title: string;
  date: string;
  description?: string;
  image: string;
  emoji: string;
  type: 'memories';
  location?: string;
  details?: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    title: "Us on our School Uniforms",
    date: "August 25, 2024",
    image: "/images/1000445258.jpg",
    emoji: "👔",
    type: "memories",
    location: "Luta Norte, Malvar",
    details: "That day we spent together after school is something I'll always remember. We took so many pictures something we never really did before. Back at school, we didn't talk much, but when it was just the two of us, there was never a dull moment"
  },
  {
    id: 2,
    title: "The Day Weve Made It Official",
    date: "January 26, 2025",
    image: "/images/IMG_20250406_100207_794.jpg",
    emoji: "💍",
    type: "memories",
    location: "SM Santo Tomas",
    details: "It was the day we made it official that we're in a relationship, that we're together. I spent the whole day with you, from visiting Padre Pio Church to SNR and SNM in Santo Tomas. On the way back to your house, I finally asked you to be my girlfriend… and you said yes. It was one of the happiest days of my life. Honestly, I still get kilig every time I think about it. HAHAHHAHAHHAHA "
  },
  {
    id: 3,
    title: "Our first Valentines Day",
    date: "February 14, 2025",
    image: "/images/IMG_20250214_220955_364.jpg",
    emoji: "🌹",
    type: "memories",
    location: "Luta Norte, Malvar",
    details: "On Valentine's Day, I surprised you with flowers. Even though we didn't go out, just spending that time together was amazing. It was our first Valentine's, but I know it definitely won't be our last"
  },
  {
    id: 4,
    title: "Date at Outlets",
    date: "March 1, 2025",
    image: "/images/102.jpg",
    emoji: "🛍️",
    location: "Outlets",
    type: "memories",
    details: "On March 1, we went on a date, and it was such an amazing day. We took so many pictures and videos, capturing every moment, but what mattered most to me was simply spending time with the one I love. "
  },
  {
    id: 5,
    title: "My Birthday You've Made Special",
    date: "March 23, 2003",
    image: "/images/IMG_20250406_095634_859.jpg",
    emoji: "🎂",
    type: "memories",
    location: "SM Santo Tomas",
    details: "On my birthday, you made it so special. You surprised me with a cake, and we spent the day together. It was a day I'll never forget, and I'm so grateful to have you in my life"
  },
  {
    id: 6,
    title: "Trip with your Fam",
    date: "April 20, 2025",
    image: "/images/1000445254.jpg",
    emoji: "👨‍👩‍👧‍👦",
    type: "memories",
    location: "Tanauan",
    details: "Thank you so much for bringing me along on your family trip. I really appreciated every moment I spent with you and your fam, it meant a lot to me to be part of those memories. \nBut if I had to choose one that stood out the most, it was seeing you during the sunset. The sky was breathtaking, but even then, your beauty outshined it all"
  },
  {
    id: 7,
    title: "Picture of Us",
    date: "April 20, 2025", 
    image: "/images/1000445255.jpg",
    emoji: "📸",
    type: "memories",
    location: "Tanauan",
    details: "The memories we shared on that trip were truly amazing. Every moment with you felt special, but what I'll never forget is the night we slept beside each other. Waking up with body aches made us laugh, because honestly, it didn't matter at all we were together, and that alone made it perfect",
  },
  {
    id: 8,
    title: "Your Birthday",
    date: "May 2, 2025",
    image: "/images/101new.jpg", 
    emoji: "🎉",
    location: "SM Lipa",
    details: "On your birthday, we went to SM Lipa to celebrate, and it was such a fun and memorable day. We ate together, explored the stores, and even played at the arcade like kids again. ",
    type: "memories"
  }
]; 