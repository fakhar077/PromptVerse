// --- TYPE DEFINITIONS ---
export interface Prompt {
  id: number;
  title: string;
  user: string;
  imageUrl: string;
  prompt: string;
  category: string;
}

export const categories = [
  'For You',
  'Digital Art',
  'Photography',
  'Portrait',
  'Conceptual',
  'Fashion',
  'Street',
  'Black and White',
  'Lifestyle',
  'Studio',
  'Cinematic',
  'Pet Photography',
  'Sketch',
  'Streetwear',
  'Reflective',
  'Fanzine',
  'Nostalgia',
  'Renaissance'
];

// --- MOCK DATA ---
export const dummyPrompts: Prompt[] = [
  {
    id: 1,
    title: "Apocalypse Silhouette Double Exposure",
    category: "Digital Art",
    prompt: "A detailed profile portrait of a man with a full beard and glasses, looking to the right. The internal space of his head and hair is filled with a double exposure image of a ruined, post-apocalyptic city street at sunset. A lone figure is seen walking away from the viewer down the center of the street. The entire image is dominated by an intense, fiery orange and deep red color palette, with glowing embers and a dark, moody atmosphere. High detail, cinematic lighting, dramatic.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/565708060_122100353973078528_2359898934560390737_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=T3C6rjyla1UQ7kNvwHkxKBy&_nc_oc=AdljoNLtmDY9Nh0K_nfhqIPU8w8ySTD39_UuASHpVEklZZURKqC3jD3mj9qaQwp72Oo&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=yb_UOKchosSrHanNmhz9Ig&oh=00_AfdHVqsLowxB-IKUdU5BC1_w3SMX2JGXhHZLQzgvPh2K-A&oe=68FCE58B"
  },
  {
    id: 2,
    title: "Neon Gas Station Retro Vibe",
    category: "Cinematic",
    prompt: "A full-body portrait of a young man with a slight smile, standing and leaning casually against a vintage car (like an older sedan) at a retro gas station at night. He is wearing a dark denim jacket over a white shirt and dark pants. The scene is illuminated by the vibrant, contrasting neon lights of the gas station sign in electric blue and bright orange/red. The ground is wet and reflective. Moody, cinematic, dark night colors with strong neon glow.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/570174756_122100354093078528_3582320120393066813_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=50xV1KiScX8Q7kNvwH5Duj3&_nc_oc=AdnjuLhQdQmMqhJEiF8aUv9ppijwB8IdnFpW9_Os6eVBNkIwgyHnfk4Q6nhEe-n9avk&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=5IWUdFyDsuBgnghYZyW03A&oh=00_Aff47k3CeUoinlN2WUcJcVLfRBkxU9XXwqbFvbh_kEQGgw&oe=68FCD6B5"
  },
  {
    id: 3,
    title: "Side Profile Dark Portrait",
    category: "Studio",
    prompt: "A side-profile, close-up studio portrait of a young man, head slightly bowed, looking down. He is wearing a simple black t-shirt. The background is pitch black (low-key). The lighting is dramatic and subtle, creating a rim-light effect that defines the silhouette of his head, neck, and the curve of his bicep, giving a warm, soft glow only to his right side. Moody, low-key lighting, deep shadows, cinematic.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/566214323_122100354051078528_1883527831461018739_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mIlIWvp4p6MQ7kNvwGJXoMo&_nc_oc=AdnOww6nT5Hug-SCAFsVDWP0s8IA6o-Yc0Z_58w3HS1WX9s6OpYQmrG7cSwCfOGAvbA&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=NEuN72WVApCyifBQtNaqrQ&oh=00_AfeCRbsLZq0V-QyO3gyDtxhtLzYsydPwJqMYoAJZUEBxgw&oe=68FD024E"
  },
  {
    id: 4,
    title: "Man in Leopard Sweater in Field",
    category: "Portrait",
    prompt: "A candid-style portrait of a smiling man with a full beard and long, dark hair, kneeling down in a vibrant field of short, lush green grass and bright yellow wildflowers. He is wearing a tan knit sweater with a large, detailed leopard and palm tree graphic on the chest, paired with tan pants. He is holding one hand on his head, looking directly at the camera. Soft, natural outdoor lighting, shallow depth of field, warm tones.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/565708011_122100354183078528_6088039964914708679_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AmDxyQ4E93YQ7kNvwFYzLZP&_nc_oc=AdnNk4yucb6LpOXnS4JNeA-Qe4IpiLvuLy90-NWE-X-45dk1e0v0qvb8ElI3HyGhVyg&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=xXEhBC528_EP0uQEH7NJtg&oh=00_AfdOV5CJh1s7Gh1mYnvcCmMuT8jJHqp3tbeAX-JqqDQocA&oe=68FCFA4B"
  },
  {
    id: 5,
    title: "Flying Fish Surreal Low-Angle Portrait",
    category: "Digital Art",
    prompt: "An extreme low-angle, wide-shot portrait of a young man with dark, curly hair, looking directly at the camera with a neutral expression. He is standing in a field of bright orange wildflowers/plants that heavily frame the foreground. Above him, the background is a bright blue sky with scattered white clouds, through which hundreds of small, bright orange goldfish appear to be swimming or flying. Surrealism, wide-angle lens effect, shallow depth of field, vibrant colors, fantasy elements.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/566213247_122100354201078528_409590790062991145_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YQHwbqvFHHYQ7kNvwEyqSR4&_nc_oc=AdkleQZILGwWs0ONgQsPniRFD_lv87E-yvr9WKV8O8D3d3occR4rkkLd3wxI8Ixicnc&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=EzpU85PhGWIpfBg5HfUJLg&oh=00_AfcfmN2iZQVZ-6BCIO5oSW4LW6jaqeU2vZ1lgmFTvPhOkg&oe=68FCF255"
  },
  {
    id: 6,
    title: "Social Media Addiction Holographic Portrait",
    category: "Conceptual",
    prompt: "A dark, moody portrait of a young man looking intently at a smartphone he is holding. The scene is framed by a low-light, dark environment. The foreground and surrounding area are filled with holographic, glowing representations of social media icons, metrics (likes, views, followers), and notifications that float around him and the phone. The interface is highly detailed and semi-transparent. Conceptual art, dark lighting, glow effects, commentary on digital life.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/567954412_122100354273078528_8075129008739341665_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3NAss3x-pkMQ7kNvwEsGMQ8&_nc_oc=AdmzXwRThuimmlrqRu7hzNPBTk8I0Ar9z29K5Xxkwpl_B4v2rbQXqlY5QZqOat9QFx8&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=uSPWpnVMIVupfFyO48uorA&oh=00_Afe0Kx5tooN8h7R0bIebaCOuJBwfRoL0AuTGBz9SMtriFg&oe=68FCFC3C"
  },
  {
    id: 7,
    title: "Black & White Portrait with Neon Orange Glasses",
    category: "Fashion",
    prompt: "A tight, close-up portrait of a man with a beard and slicked-back dark hair, wearing a black turtleneck and blazer. The image is predominantly black and white, but his oversized, rectangular sunglasses are a highly saturated, neon orange, creating a strong, colorful focal point. He has a serious, intense expression. High contrast, selective color, studio lighting.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/565696717_122100354381078528_1738838899242800398_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EE6c5Aibk3wQ7kNvwGdiNKd&_nc_oc=Adl9_CxDFffxKQFTnE9GiAh14flHpgclq9pQ1U9mw4jfpGoywtMb8-bz3kz93-ec0UQ&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=Q7BL5A9NIaffCYu9VepbIw&oh=00_AfdP2X6rouI7G4POjlybUcv9oZCqUjLbUODxG9e61ftXRA&oe=68FCEE5E"
  },
  {
    id: 8,
    title: "Diwali Celebration Sparkler Portrait",
    category: "Portrait",
    prompt: "A portrait of a young man in a squatting pose, holding a lit sparkler in his hand, looking at the camera with a subtle smile. He is wearing a black long-style tunic (kurta) and white pants. The background is a bokeh of hundreds of warm, out-of-focus golden-yellow string lights, creating a magical, festive atmosphere. Shallow depth of field, warm color palette, bokeh background, festive lighting.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/568253731_122100354393078528_2979495652150763832_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_a96GgzjbkwQ7kNvwEFW1oX&_nc_oc=AdmO0wiwGat89MA9GLbqp0zqBYzSn_RSFCp39KOziKRlPCvJCYLsIGhJ8-LHMA6D5jU&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=Y6Dpr4n9GyVdmmAZIl74ig&oh=00_AfcKN6EuOqYILw9mR4NZxTmtiaAU5zfP336gpSkSzOUTpg&oe=68FCF1CD"
  },
  {
    id: 9,
    title: "Moody Black & White Spectacles Portrait",
    category: "Black and White",
    prompt: "A medium-close-up black and white portrait of a man with dark, curly hair, wearing thin-rimmed, round glasses. He is wearing a light-colored knit sweater, looking off to the side with an engaged expression. The scene is moody and dramatic, with a single light source casting a strong highlight across his forehead and cheekbone, and a deep shadow on the rest of the dark background. High contrast black and white, dramatic lighting, intimate, cinematic.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/566206174_122100354447078528_792221354388183251_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_7iMQWqDfiMQ7kNvwGGjXaO&_nc_oc=AdmbfF3ltQy1ux89RiuUD6d0kEvRG3FtVAkYukG2HWrSwMk8JgVe2whhQP4DvdUNups&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=Qdh-Mkdy7zvRUILwYMo_3g&oh=00_AfcFvMvdm0iDKofvUYKwish8XyjiQLsRzVmzBOvRIQH3HA&oe=68FCFA46"
  },
  {
    id: 10,
    title: "Thoughtful Black & White Close-Up",
    category: "Black and White",
    prompt: "A close-up, black and white portrait of a man with a short beard and thin-rimmed, round glasses. He is resting his head on his hand, looking up and away with a thoughtful, pensive expression. The lighting is soft but directional, highlighting his features. Intimate, black and white, contemplative expression, soft light.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/568968967_122100354561078528_2148959336892219354_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aTOnFjJV9eQQ7kNvwEc8Q_-&_nc_oc=AdknMQhkiIHyXTRxiHqIwOsnnD6xA6jB9p317MzWjse2MdfH_elD7g-f-IK3RvNjF5M&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=XF5afpr2QPwuyVfG-xVYqQ&oh=00_AfcmV_68q0WKhkolAcuQEolR4ej6BtVvnXBGPsfFXJe4Ag&oe=68FCF38F"
  },
  {
    id: 11,
    title: "Dramatic Black and White Close-up Portrait",
    category: "Studio",
    prompt: "A striking black and white, close-up portrait of a young man with dark, styled hair and light stubble, looking directly into the camera with an intense gaze. His hand is raised to his chin in a thoughtful pose, and he is wearing a classic black watch. The lighting is dramatic and high contrast, with a single light source illuminating his face from the left, creating deep shadows on the right side of his face and body against a pure black background. Low-key, moody, studio photography.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/567179194_122100354555078528_3181266250816636765_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=R_zoTRHKx4MQ7kNvwFHsG5h&_nc_oc=AdnQ5a5weQuY-_xok8raXogI9PUnhhiRl7cC23YaapMPiXu6oheEV_WPSQPrhcW4z1o&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=-yZgb01TWni4jfJ3PrVC1g&oh=00_Afd2b14vRrsfV4eCeqzieRZbL3s9jFANDmXvgmCfC0JwiQ&oe=68FCF6C5"
  },
  {
    id: 12,
    title: "Golden Hour Headphones Profile",
    category: "Lifestyle",
    prompt: "A medium-shot portrait of a man with curly hair, wearing over-ear headphones, looking off to the right side of the frame. The image has a warm, golden, almost sepia-toned glow, suggesting golden hour or indoor incandescent lighting. The background is softly blurred and out of focus, with warm light sources. The foreground is partially obscured by soft, out-of-focus elements, giving a sense of depth and intimacy. Warm lighting, shallow depth of field, natural texture, cinematic.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/566219714_122100354603078528_3792429011672237817_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=E199wQxJGmgQ7kNvwFpMjWe&_nc_oc=AdlxlvyqlWpGhnBM48EGHw89dPjad4tekKxR5BDrtgaRSMX25iObzQrl4G1t62ipD1c&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=vBYu_OVIs03YsO2FXA786g&oh=00_Afc7Qc1TQqRD8n8dtRtqqAIOqMmnqPI7EWe4iFsZPxABMQ&oe=68FD0CDC"
  },
  {
    id: 13,
    title: "Persian Serenity",
    category: "Pet Photography",
    prompt: "A 4K ultra-realistic portrait of a young girl, framed from the chest up (not full body),designed for Instagram story or profile picture. The background is a luxurious Persian redcarpet design (only behind her, not on the ground). Sunlight shines from one side,castingnatural warm light across half of her face. She is wearing an elegant dress inspired byPersian carpet patterns,with authentic Iranian colors and motifs. Her facial features remainunchanged She is holding a Persian cat in her hands",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/569082684_122100360447078528_4281612643279792845_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BJ7tBkAad7UQ7kNvwHv014n&_nc_oc=AdlyijMriFdQlEPTrLhF7Uv3bHNxMbNwiAOJigQVIhqeNWSbzM1UeVJejYdjjKn0wl4&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=crK1LN-dLBO_XtDZwi_JwQ&oh=00_Afcg2zp544knIxUczzA4CJ_XNhwe0heknssWuFO96SyHDQ&oe=68FCECA9"
  },
  {
    id: 14,
    title: "Regal Man in Chandelier Room",
    category: "Portrait",
    prompt: "A full-shot portrait of a man seated confidently in an ornate, dark red velvet armchair in a luxurious, traditional room. He is wearing a light beige suit over a white open-collar shirt, holding his glasses in one hand. The background features rich wooden paneling, elegant gold curtains, and multiple sparkling crystal chandeliers. The window behind him provides soft natural light. Formal portrait, opulent setting, rich textures, classic elegance.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/566285392_122100354177078528_8160973649603741779_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fzbzEb0QwaMQ7kNvwHCSpPm&_nc_oc=AdmIgxiOEvQv4XX-P7-ZMwjDCsttr_G0PpwCx2rARZxXXog6EpsxuyczW1fNuZl_-N8&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=mzC5MfwJ3sQTy973velQaQ&oh=00_AffTv2VfPddUgb8SyMA0m_vRkQQnevcIzz2AoRfK0d1xTQ&oe=68FD02AA"
  },
  {
    id: 15,
    title: "Woman in Red Saree with Flowers",
    category: "Portrait",
    prompt: "A side-profile, waist-up portrait of a young woman with long, dark hair, looking off to the right with a soft expression. She is wearing a vibrant red saree with visible drapes and folds. Small white flowers are tucked into her hair behind her ear. The background is a plain, warm, neutral beige color, with a soft, distinct shadow of her profile cast on the wall behind her. Soft lighting, warm skin tones, cultural attire, elegant.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/567924758_122100354789078528_952580585840270912_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BBd7D5RDJ1kQ7kNvwEtwnyi&_nc_oc=AdkRnn7ck0VnwMi5BYwkpj1UUo6OcTjDgg_zMRbf9pcnWf3umdbJybK_3EgHvcEo_ro&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=iYnO1VUNq-2PtpRgmjNodQ&oh=00_AfeCIQHlpRVQAFekV-pQrFh_E9HGHOFigbO6BeM-YEVcnA&oe=68FCE80F"
  },
  {
    id: 16,
    title: "Ethereal Double Exposure by the Water",
    category: "Digital Art",
    prompt: "A monochromatic (black and white/grayscale), double exposure image. The primary subject is a woman in a dark coat and pants, standing on a rock by a calm body of water (ocean/lake), looking out to the side. Superimposed behind her, and slightly larger, is a faint, ethereal, translucent image of another woman's profile (the same woman), with her head tilted upwards, eyes closed, suggesting contemplation or freedom. The sky is overcast and moody. Conceptual, moody, fine art photography, dreamlike.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/567672768_122100354765078528_4047466542071307207_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f7OfB1Gzcw0Q7kNvwGCnUe7&_nc_oc=AdnEWH8lct4cxEr6xDfM2tGIR0WIfndzqdwXSFPtLJz_ze9XCTzWy5JR9GZXvcwpTyQ&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=PijYNvvZepJ2ejxVhoTmXQ&oh=00_AfcJqMOFtj8QYHcxw84CSXTN2-QdIqNvDxevzslXJlnIaw&oe=68FCFE10"
  },
  {
    id: 17,
    title: "The Artist's Gaze: Green Ink Sketch",
    category: "Sketch",
    prompt: "Create a photo-style line drawing / ink sketch of a face identical to the uploaded reference image — keep every facial feature, proportion, and expression exactly the same.Use green and white ink tones with intricate, fine line detailing, drawn on a notebook-page style background Show a right hand holding a pen and an eraser near the sketch, as if the artist is still working.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/566217084_122100364431078528_2403301751234149801_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HGLYUcYbLiYQ7kNvwFUYK3_&_nc_oc=AdmwioVL9t5qrRU93rX2TsDtuJPM2emPtg0PZPgaCxqJ5olqovG5XE09qODIzPnAUy8&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=Qo6A4N_abJlk7cI04FipRw&oh=00_AfdZx2nYKm2JuunLvuJPTLPjLB1ufWSv1adIlw-USAdfrw&oe=68FD4255"
  },
  {
    id: 18,
    title: "Rainy Day Cafe Reader",
    category: "Lifestyle",
    prompt: "A cozy indoor portrait of a man with blonde, slightly wavy hair and a beard, sitting at a wooden table in a cafe. He is wearing a dark grey hooded sweatshirt and looking thoughtfully out of a rain-streaked window. An open book and a white coffee cup on a saucer are on the table in front of him. The background outside the window shows blurred, warm city lights through the rain. Warm and inviting atmosphere, soft natural light, shallow depth of field, moody, cozy.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/565764769_122100354903078528_700301906339029694_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yYx_dlJ_fZsQ7kNvwFYfktJ&_nc_oc=AdljHT6zapCN25sjz0TVH4VdnWRUnpupzKk5LQQNtad1nB-kWpDJohixEY31eS0teJM&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=9OrCSOXrB7yJxdQXvQzGYw&oh=00_AffcpK1sEZPbutpdWYMBi2cXzV9CjslT5zGTD9eKz904dA&oe=68FD0995"
  },
  {
    id: 19,
    title: "Urban Man in Times Square",
    category: "Street",
    prompt: "A medium close-up, vertical portrait of a man with dark, styled hair and a beard, wearing a brown jacket over a dark sweater and a backpack, looking slightly up and to the side. He is standing in a bustling urban environment resembling Times Square or a similar city street, with tall buildings, bright, out-of-focus billboards, and blurred crowds in the background. The lighting is warm and bright from the city lights, with a soft blur. Dynamic city background, natural light, street photography, shallow depth of field.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/565813958_122100354909078528_5786081310038474432_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uqSHZNUBB0cQ7kNvwGnyzFo&_nc_oc=AdkfThcL7ujfMyuuR-9tMDcy4Ob6yZzE8tjmNHy8CfrSNViJ0Zqcxs5nBt-Gn6m2--w&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=wg9oWeERT6YcKc-KSxtp_Q&oh=00_AfcNfnp66F9fiULUoVK74AJtzSgDYhV6MVHqzTwy0sy6WQ&oe=68FD0005"
  },
  {
    id: 20,
    title: "Stylish Man in Sunglasses City Street",
    category: "Fashion",
    prompt: "A close-up, vertical portrait of a stylish man with dark, wavy hair, a beard, and reflective round sunglasses. He is wearing a black turtleneck and a dark tailored overcoat, looking to the side with a serious expression. The background is a softly blurred city street with warm, out-of-focus lights (bokeh) and indistinct figures, suggesting a sunny or bright urban setting. Fashion photography, sharp focus on subject, shallow depth of field, elegant, urban chic.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/565942095_122100355047078528_7537242443910306214_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3s4WuJ8tKkEQ7kNvwE8UuvB&_nc_oc=AdnovfhJ2V0tulHtFASMcNOCkoQOpaEAgQ7xgYtor_OYzdcyoJ9fdCMXKrucTZp44mI&_nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=KWPC2_JLhVteHvMl0WqQAw&oh=00_AffAclnK-ybeBkbD50FniE8ORCkDebVqzUVpDi662D459A&oe=68FCDD39"
  },
  {
    id: 21,
    title: "Cinematic Street Fashion",
    category: "Streetwear",
    prompt: "Cinematic street photography, stylish young woman in motion, urban environment, motion blur effect. Blurred pedestrians passing by, shallow depth of field, natural overcast lighting, soft pastel tones, editorial fashion photography, candid moment, dynamic movement, film aesthetic, muted colors.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/569247226_122100527523078528_962504120162347861_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=IsgmhkFRS-QQ7kNvwHphB3D&_nc_oc=AdkaO0pD60Baa9M1hufoFddQP52SiY633VeOH2l0G8Fix8kPMNs0sI9Tci3sL-xRVjI&nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=gUUGB4P9fJ-6KLMIijIIUA&oh=00_AfeNfVXau8hSpe7afRWzamJFUfumw9Z2ol3mVZdF0QYejg&oe=68FD2D31"
  },
  {
    id: 22,
    title: "Vintage Mirror Selfie Portrait",
    category: "Reflective",
    prompt: "4K Ultra-HD self portrait of individual (face same as reference image), wearing outfit as reference taken through the reflection of an round mirror with a thin black border. One holds a gold iPhone in left hand while the right hand rests on chin as a pose. Afternoon sunlight streams in through the window on the right creating dramatic shadows that highlight the face. The image has a vintage nostalgic aesthetic.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/568446742_122100527517078528_120316468140854907_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mll33TkW5NEQ7kNvwE497DM&_nc_oc=AdmxBad0U4P-lYnSGVUUXWiz0mq-jyjKPndYzmYvMyeqMcxR-f0o0Wu84bSPueQ1Gko&nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=kWIj7LohYWw14YCxwX17mw&oh=00_AfcZAUQXSshhoMCvK_p16Nf6qLJS_nqJNTDTlzbddNM65Q&oe=68FD4D23"
  },
  {
    id: 23,
    title: "K-Pop Fanzine Studio Portrait",
    category: "Fanzine",
    prompt: "A full-body studio portrait of a handsome young East Asian woman sitting on the floor in front of a light purple backdrop. She is wearing a cozy, oversized lavender chunky-knit sweater, white skirt, and white socks. She is affectionately hugging a large Sanrio Kuromi plushie and looking at the camera with a gentle expression. The background is decorated with playful, hand-drawn purple doodles and text (like “R,\" \"RAVYA,\" paper airplanes, and flowers), creating the style of a K-pop photocard or fanzine cover. The lighting is bright and soft, enhancing the cute and affectionate mood. (Note to model: Adhere 100% to the facial features and face, remove earrings, and maintain the exact page layout from the original attachment).",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/568691414_122100527565078528_1894284236932566748_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Mc6zYzURbvEQ7kNvwHF38ZQ&_nc_oc=AdnHEtJjiU02jz-NGHJeLiC0KpN-0sDI5Mqhsm-8brQ7wBURmzWG4kyeLuIwebGJOkQ&nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=ZC0V1YJeojAmd0VsJ88fjA&oh=00_Afc1xcmGbVSnqBuhOWy5O4t5_MUGCZbLQ67XAbBXbX1jTA&oe=68FD4E88"
  },
  {
    id: 24,
    title: "Nostalgic Classroom Portrait",
    category: "Nostalgia",
    prompt: "Cinematic portrait of the man in the picture (preserve 100% facial details of this man), vintage classroom. The camera is shot from a distance, with a small section of the hair's back visible in the foreground, as if the photographer was taking the portrait discreetly in a quiet moment. Soft, golden-yellow lighting reflects from a small window or gap in the right wall forming diagonal lines of light that fall directly on the man's face, creating a dramatic and emotional contrast. The man sits alone on a chair, his feet resting on the desk, with a relaxed and cool expression, as if lost in thought. He wears an oversized army black sweater, cream-colored cargo pants, Converse sneakers, and red headphones. A bag is hanging from the chair, blending harmoniously with the warm light. Behind him is an off-white wall with sticky notes labeled 'beingbb', notices, duty schedules, and a photo at the top. The scene includes furnishings typical of a college classroom. Reinforcing a nostalgic and contemplative feel, the image is a frozen moment in time. Soft golden hues of light blend with the dark shadows in the room, reminiscent of a scene from a Japanese Indie film. All image elements are rendered without bokeh, with even sharpness from foreground to background. The visual texture contains noticeable noise and grain, reminiscent of analog 35mm film cameras (like the Canon AE-1 or retro digital simulations using the Fujifilm X100V with 'Classic Chrome' film simulation). Possible camera settings: ISO 1600, f/5.6 aperture, 1/60s shutter speed, with a warm white balance.",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/570029944_122100527655078528_8822911507467382461_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=48TlCVYN0J8Q7kNvwGS_e7H&_nc_oc=AdlMSuzw2Ys9l2Ftt-AL-gGpozJPfB5wx3Lq5LC5tzu_lKHWO4Tge_r5ciNJ4WGWnNk&nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=O33SfDe1nhNjbuvEkkgxjw&oh=00_Aff1dbhNTs6jvW0bHPkQ0GtTw818SDhdzST7rNHVEgpmZA&oe=68FD3E75"
  },
  {
    id: 25,
    title: "Renaissance-Style Studio Portrait",
    category: "Renaissance",
    prompt: "Studio portrait, Renaissance style, soft and warm lighting with a golden glow, dramatic light coming from above, creating soft shadows. The person is positioned slightly facing to the side, with their head tilted and their gaze directed at the camera, conveying a contemplative and dreamlike expression. She delicately holds a small bouquet of white or cream roses with long stems, near her face, as if she were smelling the flowers. The dress is a cream or off-white Victorian Regency style dress with a shoulder-to-shoulder neckline and puff sleeves with lace details and ruffled cuffs. A necklace of pearls adorns the neck. The hair is long, wavy, and loose, falling on shoulders and chest. The background is a draped fabric, in neutral and warm tones like beige or light brown, with a soft texture. The depth of field is shallow, focusing on the person and the flower, with the background slightly blurred. The color palette is monochromatic, dominated by warm, soft and earthy tones. The image quality is photographic, with a touch of timeless elegance, like a classic oil painting. (Note to model: Keep 100% of the subject's facial and physical traits).",
    user: "Gemini",
    imageUrl: "https://scontent.flhe41-1.fna.fbcdn.net/v/t39.30808-6/568512356_122100527691078528_2600596521416798136_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lsak1DhuM2sQ7kNvwERt31o&_nc_oc=AdkDvd4QBeUZ5RMHv52iHCBpqtD1lY5AZYJUhQ8n_bylezFxOXbEnssxqoY3wwMBt9w&nc_zt=23&_nc_ht=scontent.flhe41-1.fna&_nc_gid=tMhFhVk16BY5oUrFIdHaJA&oh=00_Afcx7kLnZGqPSSpS1Ok8vbjGCc-D8idT4sp57Qix3_eTmg&oe=68FD51EA"
  }
];
