import { Icon } from "@iconify/react";

const collections = [
  {
    collectionId: 291881,
    title: "Understanding Easter",
    slug: "understanding-easter",
    description:
      "Though it's all about eggs and bunnies in popular culture, for Christians, Easter signifies the resurrection of Jesus Christ. Learn about the holy days leading up to Easter and the meaning and timing of the holiday itself.",
    image: {
      src: "https://www.dummies.com/wp-content/uploads/shutterstock_1294713463-1172x586.jpg",
      width: 1172,
      height: 586,
    },
    _links: {
      self: "https://dummies-api.dummies.com/v2/collections/291881",
    },
  },
  {
    collectionId: 291872,
    title: "Making Things Grow",
    slug: "making-things-grow",
    description:
      "There are so many benefits to gardening \u00e2\u0080\u0095 nutritious vegetables, beautiful flowers, physical exercise, and mental destressing, to name a few. In this collection, you'll find gardening basics, help with common problems, and inspiration for stretching your skills. ",
    image: {
      src: "https://www.dummies.com/wp-content/uploads/Gardening-collection-1170x586.jpg",
      width: 1170,
      height: 586,
    },
    _links: {
      self: "https://dummies-api.dummies.com/v2/collections/291872",
    },
  },
  {
    collectionId: 291903,
    title: "For the Budding Cannabis Enthusiast",
    slug: "for-the-budding-cannabis-enthusiast",
    description:
      "In the U.S., 4/20 is the unofficial holiday of one celebrated \u00e2\u0080\u0094 and controversial \u00e2\u0080\u0094 plant: cannabis. (Don\u00e2\u0080\u0099t take our word for it: Even Senator Chuck Schumer said so!) Whether you use it for medical reasons, or you're a casual consumer or budding investor, this collection explores why \u00e2\u0080\u0094 and how \u00e2\u0080\u0094 so many Americans choose cannabis.",
    image: {
      src: "https://www.dummies.com/wp-content/uploads/shutterstock_582654190-1172x586.jpg",
      width: 1172,
      height: 586,
    },
    _links: {
      self: "https://dummies-api.dummies.com/v2/collections/291903",
    },
  },
  {
    collectionId: 291934,
    title: "For the Exam-Season Crammer",
    slug: "for-the-exam-season-crammer",
    description:
      "Calling all bookworms and teacher's pets! The moment you've been stressing for so long is nigh. Get ready for exam season by learning how best to study for your tests, what foods to feed your overworked brain, and what to do to ease all of that stress.",
    image: {
      src: "https://www.dummies.com/wp-content/uploads/teslariu-mihai-UHMnRquhiDI-unsplash-1170x586.jpg",
      width: 1170,
      height: 586,
    },
    _links: {
      self: "https://dummies-api.dummies.com/v2/collections/291934",
    },
  },
];

const categories = [
  {
    categoryId: 33809,
    title: "Home, Auto, & Hobbies",
    slug: "home-auto-hobbies",
    description:
      "What do you need to learn to make everyday life easier and more fun? Maybe it\u00e2\u0080\u0099s meal planning. Or playing bartender at parties. Want to learn to change the oil in your car? Train your cocker spaniel or use your fancy new camera? We\u00e2\u0080\u0099ve got the 411.",
    image: {
      src: "https://www.dummies.com/wp-content/uploads/home-auto-hobbies-category.jpg",
      width: 1286,
      height: 643,
    },
    relatedBooks: [
      {
        bookId: 282345,
        title: "Landscaping For Dummies, 2nd Edition",
        slug: "landscaping-for-dummies",
        category: {
          categoryId: 33926,
          title: "Landscaping",
          slug: "landscaping",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33926",
          },
        },
        categoryList: [
          "home-auto-hobbies",
          "garden-green-living",
          "landscaping",
        ],
        image: {
          src: "https://www.dummies.com/wp-content/uploads/landscaping-fd-2e-9781119853480.jpg",
          width: 300,
          height: 377,
        },
        _links: {
          self: "https://dummies-api.dummies.com/v2/books/282345",
        },
      },
      {
        bookId: 282629,
        title: "Texas Hold'em For Dummies, 2nd Edition",
        slug: "texas-holdem-for-dummies",
        category: {
          categoryId: 33897,
          title: "Poker",
          slug: "poker",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33897",
          },
        },
        categoryList: ["home-auto-hobbies", "games", "card-games", "poker"],
        image: {
          src: "https://www.dummies.com/wp-content/uploads/9781119873099.jpg",
          width: 300,
          height: 464,
        },
        _links: {
          self: "https://dummies-api.dummies.com/v2/books/282629",
        },
      },
    ],
    relatedArticles: [
      {
        articleId: 209249,
        slug: "orchids-for-dummies-cheat-sheet",
        title: "Orchids for Dummies Cheat Sheet",
        category: {
          categoryId: 33920,
          title: "Flowers",
          slug: "flowers",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33920",
          },
        },
        categoryList: [
          "home-auto-hobbies",
          "garden-green-living",
          "gardening",
          "flowers",
        ],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/209249",
        },
      },
      {
        articleId: 171799,
        slug: "ten-steps-for-getting-the-best-deal-on-a-good-used-car",
        title: "10 Steps for Getting the Best Deal on a Good Used Car",
        category: {
          categoryId: 34374,
          title: "General (Automotive)",
          slug: "general-automotive",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34374",
          },
        },
        categoryList: ["home-auto-hobbies", "automotive", "general-automotive"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/171799",
        },
      },
      {
        articleId: 284602,
        slug: "coffee-brewing-methods",
        title: "Coffee Brewing Methods",
        category: {
          categoryId: 34333,
          title: "Coffee & Tea",
          slug: "coffee-tea",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34333",
          },
        },
        categoryList: ["home-auto-hobbies", "food-drink", "coffee-tea"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/284602",
        },
      },
      {
        articleId: 181554,
        slug: "preparing-for-a-house-viewing-as-a-home-seller",
        title: "Preparing for a House Viewing as a Home Seller",
        category: {
          categoryId: 33962,
          title: "Home Ownership & Renting",
          slug: "home-ownership-renting",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33962",
          },
        },
        categoryList: ["home-auto-hobbies", "home-ownership-renting"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/181554",
        },
      },
    ],
    _links: {
      toBooks: "https://dummies-api.dummies.com/v2/books/33809",
      toArticles: "https://dummies-api.dummies.com/v2/articles/33809",
    },
  },
  {
    categoryId: 33662,
    title: "Academics & The Arts",
    slug: "academics-the-arts",
    description:
      "Maybe you need help passing calculus \u00e2\u0080\u0095 or the real estate exam. You're looking to move up at work or school. Or maybe you're done with school, but you want to learn Spanish or acting or songwriting. It's all here. Dive in!",
    image: {
      src: "https://www.dummies.com/wp-content/uploads/academics-and-arts-category.jpg",
      width: 1286,
      height: 643,
    },
    relatedBooks: [
      {
        bookId: 290253,
        title: "Classical Guitar For Dummies, 2nd Edition",
        slug: "classical-guitar-for-dummies-2nd-edition",
        category: {
          categoryId: 33735,
          title: "Guitar",
          slug: "guitar",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33735",
          },
        },
        categoryList: ["academics-the-arts", "music", "instruments", "guitar"],
        image: {
          src: "https://www.dummies.com/wp-content/uploads/9781119873020.jpg",
          width: 300,
          height: 377,
        },
        _links: {
          self: "https://dummies-api.dummies.com/v2/books/290253",
        },
      },
      {
        bookId: 290245,
        title: "Writing Sci-Fi, Fantasy, and Horror For Dummies",
        slug: "writing-sci-fi-fantasy-and-horror-for-dummies",
        category: {
          categoryId: 33711,
          title: "Writing",
          slug: "writing",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33711",
          },
        },
        categoryList: [
          "academics-the-arts",
          "language-language-arts",
          "writing",
        ],
        image: {
          src: "https://www.dummies.com/wp-content/uploads/9781119839095.jpg",
          width: 300,
          height: 377,
        },
        _links: {
          self: "https://dummies-api.dummies.com/v2/books/290245",
        },
      },
    ],
    relatedArticles: [
      {
        articleId: 208263,
        slug: "cissp-for-dummies-cheat-sheet",
        title: "CISSP For Dummies Cheat Sheet",
        category: {
          categoryId: 33777,
          title: "CISSP",
          slug: "cissp",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33777",
          },
        },
        categoryList: ["academics-the-arts", "study-skills-test-prep", "cissp"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/208263",
        },
      },
      {
        articleId: 210078,
        slug: "tips-and-techniques-for-interviewing-people-on-camera",
        title: "Tips and Techniques for Interviewing People on Camera",
        category: {
          categoryId: 33749,
          title: "Film",
          slug: "film",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33749",
          },
        },
        categoryList: ["academics-the-arts", "performing-arts", "film"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/210078",
        },
      },
      {
        articleId: 208055,
        slug: "math-for-real-life-for-dummies-cheat-sheet",
        title: "Math For Real Life For Dummies Cheat Sheet",
        category: {
          categoryId: 33722,
          title: "Basic Math",
          slug: "basic-math",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33722",
          },
        },
        categoryList: ["academics-the-arts", "math", "basic-math"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/208055",
        },
      },
      {
        articleId: 284802,
        slug: "bipoc-complexities-of-life-in-color",
        title: "BIPOC\u00e2\u0080\u0094Complexities of Life in Color",
        category: {
          categoryId: 33686,
          title: "Humanities",
          slug: "humanities",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33686",
          },
        },
        categoryList: ["academics-the-arts", "humanities"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/284802",
        },
      },
    ],
    _links: {
      toBooks: "https://dummies-api.dummies.com/v2/books/33662",
      toArticles: "https://dummies-api.dummies.com/v2/articles/33662",
    },
  },
  {
    categoryId: 34038,
    title: "Body, Mind, & Spirit",
    slug: "body-mind-spirit",
    description:
      "Your physical self and your cognitive and spiritual selves combine to make you who you are. Whether you want to learn about giving birth, eating well, managing grief, or deepening your faith, it's all here.",
    image: {
      src: "https://www.dummies.com/wp-content/uploads/body-mind-spirit-category.jpg",
      width: 1286,
      height: 643,
    },
    relatedBooks: [
      {
        bookId: 282064,
        title: "Catholicism For Dummies, 4th Edition",
        slug: "catholicism-for-dummies",
        category: {
          categoryId: 34208,
          title: "Catholicism",
          slug: "catholicism",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34208",
          },
        },
        categoryList: [
          "body-mind-spirit",
          "religion-spirituality",
          "christianity",
          "catholicism",
        ],
        image: {
          src: "https://www.dummies.com/wp-content/uploads/catholicism-fd-4e-9781119855712.jpg",
          width: 300,
          height: 377,
        },
        _links: {
          self: "https://dummies-api.dummies.com/v2/books/282064",
        },
      },
      {
        bookId: 289784,
        title: "Plant-Based Diet Cookbook For Dummies",
        slug: "plant-based-diet-cookbook-for-dummies",
        category: {
          categoryId: 34129,
          title: "Plant-Based Diet",
          slug: "plant-based-diet",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34129",
          },
        },
        categoryList: [
          "body-mind-spirit",
          "physical-health-well-being",
          "diet-nutrition",
          "plant-based-diet",
        ],
        image: {
          src: "https://www.dummies.com/wp-content/uploads/111984634X.jpg",
          width: 300,
          height: 377,
        },
        _links: {
          self: "https://dummies-api.dummies.com/v2/books/289784",
        },
      },
    ],
    relatedArticles: [
      {
        articleId: 208727,
        slug: "sports-psychology-for-dummies-cheat-sheet",
        title: "Sports Psychology For Dummies Cheat Sheet",
        category: {
          categoryId: 34076,
          title: "General (Psychology)",
          slug: "general-psychology",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34076",
          },
        },
        categoryList: [
          "body-mind-spirit",
          "emotional-health-psychology",
          "psychology",
          "general-psychology",
        ],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/208727",
        },
      },
      {
        articleId: 198494,
        slug: "weight-training-how-many-reps-and-sets-to-do",
        title: "Weight Training: How Many Reps (and Sets) to Do",
        category: {
          categoryId: 34174,
          title: "Strength Training",
          slug: "strength-training",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34174",
          },
        },
        categoryList: [
          "body-mind-spirit",
          "physical-health-well-being",
          "exercise-movement",
          "strength-training",
        ],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/198494",
        },
      },
      {
        articleId: 200194,
        slug: "eid-al-fitr-focusing-on-charitable-acts",
        title: "Eid al-Fitr: Focusing on Charitable Acts",
        category: {
          categoryId: 34223,
          title: "General (Religion & Spirituality)",
          slug: "general-religion-spirituality",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34223",
          },
        },
        categoryList: [
          "body-mind-spirit",
          "religion-spirituality",
          "general-religion-spirituality",
        ],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/200194",
        },
      },
      {
        articleId: 163718,
        slug: "12-steps-to-using-anger-constructively",
        title: "12 Steps to Using Anger Constructively",
        category: {
          categoryId: 34041,
          title: "Anger Management",
          slug: "anger-management",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34041",
          },
        },
        categoryList: [
          "body-mind-spirit",
          "emotional-health-psychology",
          "emotional-health",
          "anger-management",
        ],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/163718",
        },
      },
    ],
    _links: {
      toBooks: "https://dummies-api.dummies.com/v2/books/34038",
      toArticles: "https://dummies-api.dummies.com/v2/articles/34038",
    },
  },
  {
    categoryId: 34224,
    title: "Business, Careers, & Money",
    slug: "business-careers-money",
    description:
      "Whether you\u00e2\u0080\u0099re managing a budget, an estate, or a team of professionals, you\u00e2\u0080\u0099ll learn how to achieve your goals with these articles. Covering everything from cryptocurrency to customer service, Dummies can help you move toward your dream job, grow a business, plan for retirement, or keep your finances in shape.",
    image: {
      src: "https://www.dummies.com/wp-content/uploads/business-careers-money-category.jpg",
      width: 1286,
      height: 643,
    },
    relatedBooks: [
      {
        bookId: 282203,
        title: "Flipping Houses For Dummies, 4th Edition",
        slug: "flipping-houses-for-dummies",
        category: {
          categoryId: 34269,
          title: "Flipping Houses",
          slug: "flipping-houses",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34269",
          },
        },
        categoryList: [
          "business-careers-money",
          "careers",
          "real-estate-careers",
          "flipping-houses",
        ],
        image: {
          src: "https://www.dummies.com/wp-content/uploads/flipping-houses.jpg",
          width: 300,
          height: 376,
        },
        _links: {
          self: "https://dummies-api.dummies.com/v2/books/282203",
        },
      },
      {
        bookId: 282038,
        title: "Business Plans For Dummies, 3rd Edition",
        slug: "business-plans-for-dummies",
        category: {
          categoryId: 34254,
          title: "Strategic Planning",
          slug: "strategic-planning",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34254",
          },
        },
        categoryList: [
          "business-careers-money",
          "business",
          "strategic-planning",
        ],
        image: {
          src: "https://www.dummies.com/wp-content/uploads/9781119866374.jpg",
          width: 300,
          height: 376,
        },
        _links: {
          self: "https://dummies-api.dummies.com/v2/books/282038",
        },
      },
    ],
    relatedArticles: [
      {
        articleId: 289353,
        slug: "taxes-2022-for-dummies-cheat-sheet",
        title: "Taxes 2022 For Dummies Cheat Sheet",
        category: {
          categoryId: 34310,
          title: "Taxes",
          slug: "taxes",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34310",
          },
        },
        categoryList: ["business-careers-money", "personal-finance", "taxes"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/289353",
        },
      },
      {
        articleId: 201013,
        slug: "making-the-leap-to-your-dream-career",
        title: "Making the Leap to Your Dream Career",
        category: {
          categoryId: 34264,
          title: "Job Searches",
          slug: "job-searches",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34264",
          },
        },
        categoryList: ["business-careers-money", "careers", "job-searches"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/201013",
        },
      },
      {
        articleId: 237561,
        slug: "what-is-cryptocurrency",
        title: "What Is Cryptocurrency?",
        category: {
          categoryId: 34277,
          title: "Cryptocurrency",
          slug: "cryptocurrency",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34277",
          },
        },
        categoryList: [
          "business-careers-money",
          "personal-finance",
          "cryptocurrency",
        ],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/237561",
        },
      },
      {
        articleId: 208912,
        slug: "communicating-effectively-for-dummies-cheat-sheet",
        title: "Communicating Effectively For Dummies Cheat Sheet",
        category: {
          categoryId: 34232,
          title: "Business Communication",
          slug: "business-communication",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34232",
          },
        },
        categoryList: [
          "business-careers-money",
          "business",
          "business-communication",
        ],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/208912",
        },
      },
    ],
    _links: {
      toBooks: "https://dummies-api.dummies.com/v2/books/34224",
      toArticles: "https://dummies-api.dummies.com/v2/articles/34224",
    },
  },
  {
    categoryId: 33512,
    title: "Technology",
    slug: "technology",
    description:
      "Technology. It makes the world go 'round. And whether you're a self-confessed techie or a total newbie, you'll find something to love among our hundreds of technology articles.",
    image: {
      src: "https://www.dummies.com/wp-content/uploads/technology-category.jpg",
      width: 1286,
      height: 643,
    },
    relatedBooks: [
      {
        bookId: 290590,
        title: "Windows 11 All-in-One For Dummies",
        slug: "windows-11-all-in-one-for-dummies",
        category: {
          categoryId: 34638,
          title: "Windows 11",
          slug: "windows-11",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/34638",
          },
        },
        categoryList: [
          "technology",
          "computers",
          "operating-systems",
          "windows",
          "windows-11",
        ],
        image: {
          src: "https://www.dummies.com/wp-content/uploads/9781119858690.jpg",
          width: 300,
          height: 376,
        },
        _links: {
          self: "https://dummies-api.dummies.com/v2/books/290590",
        },
      },
      {
        bookId: 281631,
        title: "AutoCAD For Dummies, 19th Edition",
        slug: "autocad-for-dummies",
        category: {
          categoryId: 33635,
          title: "AutoCAD",
          slug: "autocad",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33635",
          },
        },
        categoryList: ["technology", "software", "design-software", "autocad"],
        image: {
          src: "https://www.dummies.com/wp-content/uploads/1119868769.jpg",
          width: 300,
          height: 376,
        },
        _links: {
          self: "https://dummies-api.dummies.com/v2/books/281631",
        },
      },
    ],
    relatedArticles: [
      {
        articleId: 290240,
        slug: "cloud-security-for-dummies-cheat-sheet",
        title: "Cloud Security For Dummies Cheat Sheet",
        category: {
          categoryId: 33537,
          title: "Cybersecurity",
          slug: "cybersecurity",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33537",
          },
        },
        categoryList: ["technology", "cybersecurity"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/290240",
        },
      },
      {
        articleId: 144791,
        slug: "creating-a-youtube-channel-in-6-easy-steps",
        title: "6 Tips for Creating a Great YouTube Channel",
        category: {
          categoryId: 33616,
          title: "YouTube",
          slug: "youtube",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33616",
          },
        },
        categoryList: ["technology", "social-media", "youtube"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/144791",
        },
      },
      {
        articleId: 290196,
        slug: "office-2021-all-in-one-for-dummies-cheat-sheet",
        title: "Office 2021 All-in-One For Dummies Cheat Sheet",
        category: {
          categoryId: 33652,
          title: "General (Microsoft)",
          slug: "general-microsoft",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33652",
          },
        },
        categoryList: [
          "technology",
          "software",
          "microsoft-products",
          "general-microsoft",
        ],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/290196",
        },
      },
      {
        articleId: 165743,
        slug: "walk-through-cleaning-up-a-photo-in-photoshop-cc",
        title: "Steps to Cleaning Up a Photo in Photoshop CC",
        category: {
          categoryId: 33629,
          title: "Photoshop",
          slug: "photoshop",
          _links: {
            self: "https://dummies-api.dummies.com/v2/categories/33629",
          },
        },
        categoryList: ["technology", "software", "adobe-products", "photoshop"],
        _links: {
          self: "https://dummies-api.dummies.com/v2/articles/165743",
        },
      },
    ],
    _links: {
      toBooks: "https://dummies-api.dummies.com/v2/books/33512",
      toArticles: "https://dummies-api.dummies.com/v2/articles/33512",
    },
  },
];

export default function Home() {
  return (
    <div>
      <nav className="bg-yellow-400 text-stone-900 shadow-md w-full p-5 px-7 flex items-center justify-between">
        <img src="https://www.dummies.com/img/logo.f7c39ad9.svg" />
        <div className="flex gap-16 font-semibold">
          <a className="flex items-center gap-0.5">
            Articles
            <Icon
              icon="uil:angle-down"
              className="w-5 h-5 stroke-1 stroke-stone-900"
            />
          </a>
          <a className="flex items-center gap-0.5">
            Books
            <Icon
              icon="uil:angle-down"
              className="w-5 h-5 stroke-1 stroke-stone-900"
            />
          </a>
          <a className="flex items-center gap-0.5">
            Collections
            <Icon
              icon="uil:angle-down"
              className="w-5 h-5 stroke-1 stroke-stone-900"
            />
          </a>
          <a>Custom Solutions</a>
        </div>
        <button>
          <Icon
            icon="uil:search"
            className="w-6 h-6 stroke-[0.6px] stroke-stone-900"
          />
        </button>
      </nav>
      <div className="flex flex-col px-20 justify-center w-full h-[28rem] overflow-hidden bg-[url('https://cdn.mos.cms.futurecdn.net/eNCEd5rHYLk658pLqvTgwB.jpg')] bg-cover bg-center bg-black bg-blend-darken bg-opacity-50">
        <h1 className="text-white w-1/2 text-5xl font-semibold leading-snug">
          Don&apos;t Miss Out on This Month&apos;s Lunar Eclipse
        </h1>
        <p className="text-white w-7/12 mt-6 leading-relaxed">
          Celebrate the first lunar eclipse of the year by learning more about
          the moon and its significance in astronomy, astrology, and even
          classical music.{" "}
        </p>
        <button className="bg-yellow-400 rounded-md shadow-md text-stone-900 font-semibold px-16 py-4 mt-10 w-min whitespace-nowrap">
          Read More
        </button>
      </div>
      <div className="flex flex-col items-center mt-16">
        <h2 className="font-semibold text-4xl after:w-32 after:border-b-4 after:absolute after:-bottom-2 after:rounded-full after:left-1/2 after:border-yellow-400 relative after:-translate-x-1/2">
          Featured Collections
        </h2>
        <div className="px-32 grid grid-cols-2 gap-12 mt-16">
          {collections.map((e) => (
            <div
              key={e}
              className="flex flex-col bg-white shadow-md rounded-md overflow-hidden"
            >
              <img src={e.image.src} />
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-3xl font-medium">{e.title}</h3>
                  <p className="text-gray-600 mt-4">{e.description}</p>
                </div>
                <div className="flex justify-end items-center">
                  <button className="flex items-center gap-1 text-xl mt-6 font-medium">
                    Explore collection
                    <Icon
                      icon="uil:arrow-right"
                      className="w-6 h-6 stroke-stone-900"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <h2 className="font-semibold text-4xl after:w-32 after:border-b-4 after:absolute after:-bottom-2 after:rounded-full after:left-1/2 after:border-yellow-400 relative after:-translate-x-1/2">
          Explore Categories
        </h2>
        <div className="w-full mt-16">
          {categories.map((e) => (
            <>
              <div
                className="h-[30rem] flex flex-col justify-center px-20 w-full bg-cover bg-blend-darken bg-black bg-opacity-50"
                style={{
                  backgroundImage: `url('${e.image.src}')`,
                }}
              >
                <h3 className="text-white w-1/2 text-5xl font-semibold leading-snug">
                  {e.title}
                </h3>
                <p className="text-white w-7/12 mt-6 leading-relaxed">
                  {e.description}
                </p>
                <div className="flex gap-4">
                  <button className="bg-yellow-400 rounded-md shadow-md text-stone-900 font-semibold px-16 py-4 mt-10 w-min whitespace-nowrap">
                    View books
                  </button>
                  <button className="bg-yellow-400 rounded-md shadow-md text-stone-900 font-semibold px-16 py-4 mt-10 w-min whitespace-nowrap">
                    View articles
                  </button>
                </div>
              </div>
              <div className="flex px-20 pt-16 pb-6 gap-6">
                {e.relatedBooks.map((e) => (
                  <div
                    key={e}
                    className="p-6 shadow-md rounded-md w-full gap-6 flex items-center"
                  >
                    <img src={e.image.src} className="w-32" />
                    <div className="flex flex-col justify-between">
                      <span className="text-yellow-400 font-medium">
                        {e.category.title}
                      </span>
                      <h4 className="text-2xl font-medium mt-2">{e.title}</h4>
                      <button className="flex items-center gap-1 text-lg mt-6 font-medium">
                        Explore book
                        <Icon
                          icon="uil:arrow-right"
                          className="w-5 h-5 stroke-stone-900"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex px-20 pb-16 gap-6">
                {e.relatedArticles.map((e) => (
                  <div
                    key={e}
                    className="p-6 shadow-md rounded-md w-full gap-6 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-yellow-400 font-medium">
                        {e.category.title}
                      </span>
                      <h4 className="text-2xl font-medium mt-2">{e.title}</h4>
                    </div>
                    <a href={e._links.self} className="flex items-center gap-1 text-lg mt-6 font-medium">
                      Explore article
                      <Icon
                        icon="uil:arrow-right"
                        className="w-5 h-5 stroke-stone-900"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
