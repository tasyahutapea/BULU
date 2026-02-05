
import { Course, QuizQuestion } from './types';

export const COURSES: Course[] = [
  {
    id: 'html-basics',
    title: 'HTML Basics',
    description: 'Intro to Modern Web Development',
    level: 'Beginner',
    lessonsCount: 12,
    rating: 4.8,
    reviewsCount: 120,
    tag: 'Featured',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClc143jAXqkirrRz854iXTgPjx5Fuv2pJ-5gBUJgWeuZMDV8_2jqACz8z6vK4JH3rvjlKj9vTX-VWBnIY_gKkN4M_09IjY9uRVY81ngjI7RsopSknYFY5nF6mz01hoFwSNHma2wO6CwCoxZIJSUkHx70gjmV0f1fuBmvSvH88d063SpV5d00G9xVduPo3h7r8yxUelSmBIdicB7O4xAcMqSHb6rOXoMTvxOfelmmb0mGyqlm2PyDXHd7LQCx8Z6jNt2lB7heudrLz5'
  },
  {
    id: 'python-101',
    title: 'Introduction to Python',
    description: 'Start Your Coding Journey',
    level: 'Beginner',
    lessonsCount: 15,
    rating: 4.7,
    reviewsCount: 200,
    tag: 'Best Value',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkV__PnNX3jIfc73VBsJ4tOmXblOGNQvIMRIk3u6YJGy95fJRvamYAJpz8CceNA0QhhDnKvfQyCb8LbohwKfVqpfzC2U_I2dAi2Q0croDtDMRJk2ZtRjiIeYI6m-b_2-03eg3oZ8LgOLARcK7eqRWS5QdTpmY6-1QGdnyAz1niqiBsIoX0j63XPM-bVmrk28wc7tdhiqGbX2t41Q21-bKVhfQyXwwzWzOAGNmg8ajcSYWBKrsDhM6hE_NbkF4AbsWb_5g1gamnDCO1'
  },
  {
    id: 'ui-design',
    title: 'UI Design Strategy',
    description: 'Creating Modern Interfaces',
    level: 'Intermediate',
    lessonsCount: 8,
    rating: 4.9,
    reviewsCount: 85,
    tag: 'Popular',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU-ynsZZDf8malu5hcDUQo-G9EpogyjwxIQvbyE5d2POurygt2dmLKfrLcyaEEwTt_f9Qksvltrh1H10nD2ur8KMIM9Iww6Bk9sBo2JecpbQNFMCvczsObPnT6WZbl5X-fGRqPrfiS3FAeyX-_NPRyIsMXZ7LLmblSsVZTosNqv1cY8xryuUAOIFsRY2AzqFy8ePOX1ruARc3zU3ByG9Cbhgr01ilSyJjnmhm1wGVWVvrl9HXFAIB3jXwR1JYdwlYBVrzZsiYyAMwv'
  },
  {
    id: 'advanced-calc',
    title: 'Advanced Calculus',
    description: 'Mastering Complex Functions',
    level: 'Advanced',
    lessonsCount: 24,
    rating: 4.6,
    reviewsCount: 52,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWoWLuflNxKAf9VcxxxG0_j_f6khRfr79V7oSHqv_kLnJcAwYNX1qhpGIf9m2AEdeokiFu-kOAhvmLJfXTcTMiL-f4hv-ABiJ89OWOBHntRiRmN4KlYfm4YP62Ca3T5vkimAc3HPRnUueWDr5kAhP248QkqD9C2jKp4n0ba2HPAeowUV3A1pD0lBH6_F695cEnyMtfGwcILcMLvnK-7KuVhYXrWddrihvHOApUP1Ain1yKjVFsQXQjLuvxAcmOFPg4DtA443K1FAJ4'
  },
  {
    id: 'design-thinking',
    title: 'Design Thinking',
    description: 'Human-Centered Problem Solving',
    level: 'Intermediate',
    lessonsCount: 10,
    rating: 4.8,
    reviewsCount: 94,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNT85HVUMwSD40jaTUyckj2Ef19Oj7HFDf5O2KMbnu8tOxnoBBi2FGYlFE_maTehrAUuyjaHgaONKkx5kEqvUf1chJ15kPStw8h8VA3z_GbC3aJDnf5MKMmi4YmamiJXi7UxZiYhZbwlDTQkTEcLJC7nvkWi-WAUa3u3OIhUOjvyN5WYSsJy4bXffGcXhnHLLpwDTnJIU6cCANrSiNg7Para4EtgW92rtsiMy0HCgsninoUNNEPa6-b61x_njc81ArQi9YgjcKoN7s'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Which HTML element is used to define the title of a document?",
    options: ["<header>", "<title>", "<head>", "<meta>"],
    correctIndex: 1,
    explanation: "The <title> tag defines the title shown in the browser tab or search results."
  }
];
