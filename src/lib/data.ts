
export type WorkType = 'Short Story' | 'Short Film' | 'Feature Idea';

export interface Work {
  id: string;
  title: string;
  type: WorkType;
  genre: string;
  description: string;
  image: string;
  readMoreLink?: string;
  watchLink?: string;
  downloadLink?: string;
}

export const works: Work[] = [
  {
    id: '8',
    title: 'Switch',
    type: 'Short Film',
    genre: 'Thriller, Sci-Fi',
    description: 'A debt-ridden young man receives a late-night call offering instant money at a deadly price. Reality begins to fracture as desperation turns into a psychological game, and raises a question: how far is he willing to go to save himself? This is a 6 page excerpt, and the full script is available upon request.',
    image: '/images/image8.png',
    readMoreLink: 'https://drive.google.com/file/d/1AjGzPY74r61C19VKi_UEuoTg6Gs83hdl/view?usp=sharing'
  },
  {
    id: '1',
    title: 'An Act of Craven',
    type: 'Short Film',
    genre: 'Psychological Thriller',
    description: 'This short film script is a psychological thriller exploring guilt, perception, and reality themes. The script was designed for indie filmmakers looking for a production-friendly screenplay with a gripping and atmospheric tone. This is a 6-page excerpt, and the full script is available upon request.',
    image: '/images/images1.png',
    readMoreLink: 'https://drive.google.com/file/d/1hIN8OT-FPkYmgGQ1KUe1p8TyUAcYZSTa/view?usp=sharing'
  },
  {
    id: '2',
    title: 'The Pool Club',
    type: 'Short Film',
    genre: 'Slice of Life, Drama, Comedy',
    description: 'I crafted a visually engaging screenplay with minimal dialogue, rich character depth, and a subtle yet powerful emotional arc. This script is perfect for indie filmmakers looking for a simple yet impactful story that resonates with audiences.This is a 6-page excerpt. The full script is available upon request.The dialogues in this script are written in Hindi.',
    image: '/images/image2.png',
    readMoreLink: 'https://drive.google.com/file/d/14J-vwq9Pyb4LK8a1r4OlzjnuzHsp8XYc/view?usp=sharing'
  },
  {
    id: '3',
    title: 'What Does forever stands for?',
    type: 'Short Story',
    genre: 'Romance, Drama, Bittersweet',
    description: 'When Vasu learns that his wifes cancer has relapsed and there is nothing more the doctors can do, he refuses to accept defeat. Holding onto hope, he fights against the inevitable, unwilling to let go. But as he sits by her hospital bed, Radha tells him a story—one that intertwines their past, their regrets, and the love they once took for granted.',
    image: '/images/image3.png',
    readMoreLink: 'https://drive.google.com/file/d/1nGa3antaRBRL13kD5GnIx06LcboQ3J_7/view?usp=sharing'
  },
  
  {
    id: '7',
    title: 'Smash',
    type: 'Short Film',
    genre: 'Sports, Drama',
    description: 'This short film explores athletes whose lives get in the way of their goals, making them forget why they started in the first place. This is a 3 page excerpt. The script was designed for indie filmmakers looking for a production-friendly short screenplay for film festivals. ',
    image: '/images/image7.png',
    readMoreLink: 'https://drive.google.com/file/d/1F4hEVMS539oCVQsFN-8gLmXxUF7GiPeK/view?usp=sharing'
  },
  {
    id: '6',
    title: 'Noel',
    type: 'Short Story',
    genre: 'War, Drama',
    description: 'A wounded boy awakens in a world of care and quiet whispers of hope. Surrounded by gentle stories and the kindness of strangers, he begins to heal. But the shadows of his past linger, and some truths are harder to face than pain itself. This is an excerpt from the story, full story is available upon request.',
    image: '/images/image6.png',
    readMoreLink: 'https://drive.google.com/file/d/1u1RHR-XJ56Jd5pD-13BD5Rxz3br2aMWl/view?usp=sharing'
  },
  {
    id: '4',
    title: 'Red Dust Protocol',
    type: 'Short Story',
    genre: 'Sci-Fi, Thriller',
    description: 'When Fani illegally summons his future selves for a quick task, he expects a shortcut, not blood on the floor and their sudden disappearance. This is an excerpt. The full story is available upon request.',
    image: '/images/image4.png',
    readMoreLink: 'https://drive.google.com/file/d/1jzvgbqH33kDFmGGvAuy-I1VGp6rIvrd8/view?usp=sharing'
  },
 
  {
    id: '5',
    title: 'The Innocent',
    type: 'Feature Idea',
    genre: 'Tragedy',
    description: 'Two strangers, living miles apart, lead parallel lives. Both have small and happy families. However, their peaceful lives take a dark turn when similar eerie incidents begin to unfold around them and they began to seem more related than mere strangers.',
    image: '/images/image9.png',
  }

// 

];

export const writer = {
  name: 'Adi Krishna Sharma',
  tagline: 'Screenplay Writer',
  shortBio: 'Creating stories that in between reality and imagination. Specializing in character-driven narratives across different mediums.',
  about: `I'm a writer with a passion for exploring emotions through different narrative forms. My work spans short stories, screenplays, and feature film concepts, each designed to immerse readers and viewers in worlds both familiar and strange.

My writing focuses on character-driven narratives that examine the complexities of human relationships, identity, and the subtle moments that shape our lives.

When I'm not writing, you'll find me exploring independent cinemas, playing chess, or engaging in conversations about movies, web series, novels, writers, songs, and music from all over the world.`,
  influences: ['Christopher Nolan', 'C Prem Kumar', 'Imtiaz Ali', 'Sir Arthur Conan Doyale', 'Andy Weir'],
  focus: ['Character-driven narratives', 'Multi-genre stories', 'Mythological Folklores']
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/shushant-sharma-4689a923a/'
  },
  {
    name: 'Freelancer',
    icon: 'freelancer',
    url: 'https://www.freelancer.in/u/AdiKrishna1807?sb=t'
  }
];
