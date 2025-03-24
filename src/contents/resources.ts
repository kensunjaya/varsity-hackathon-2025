import { Campaign } from "@/types/structure";
import Africa from "../images/africa.png";
import Australia from "../images/australia.png";
import Brazil from "../images/brazil.png";
import India from "../images/india.png";
import Jakarta from "../images/jakarta.png";

export const campaignData: Campaign[] = [
    {
      coord: { lat: -10.298311837768393, lng: 86.95207521169927 }, // Jakarta, Indonesia
      campaign: {
        title: "Flood Relief in Jakarta",
        shortDesc: "Help us provide emergency relief to families affected by the recent floods in Jakarta. Your donation will provide food, shelter, and medical supplies to those in need.",
        description: "Jakarta experiences severe flooding almost every year, displacing thousands of families, damaging homes, and disrupting daily life. The combination of heavy rainfall, poor drainage, and rising sea levels has made floods a recurring crisis. Many affected residents lose everything overnight and struggle to rebuild. This campaign is dedicated to providing emergency aid, rebuilding homes, and implementing long-term flood prevention solutions to protect Jakarta's vulnerable communities.",
        thumbnail: Jakarta.src,
        goal: 75000,
        raised: 34361,
      }

    },
    {
      coord: { lat: -27.940115171073487, lng: 110.079395477373 }, // Australia
      campaign: {
        title: "Plant Trees in Australia",
        shortDesc: "Help us plant trees in Australia to restore habitats for endangered species and reduce carbon emissions.",
        description: "Australia's forests and wildlife have been severely impacted by deforestation, wildfires, and climate change. Over the past decades, large-scale land clearing has led to habitat loss, increased carbon emissions, and threats to native species like koalas and kangaroos. Additionally, devastating wildfires, such as the 2019-2020 Black Summer bushfires, burned millions of hectares, leaving once-thriving ecosystems in ruins. This campaign is dedicated to reforesting Australia by planting trees in affected areas, restoring wildlife habitats, and fighting climate change. By contributing to this initiative, you're not just planting trees—you're rebuilding an entire ecosystem and securing a healthier future for the planet.",
        thumbnail: Australia.src,
        goal: 50000,
        raised: 24605,
      }
    },
    {
      coord: { lat: -8.147756571714984, lng: -55.183324412178614 }, // Brazil
      campaign: {
        title: "Protect the Amazon Rainforest",
        shortDesc: "Help us protect the Amazon Rainforest by supporting local communities and promoting sustainable practices.",
        description: "The Amazon Rainforest, often called the lungs of the Earth, produces 20% of the world's oxygen and is home to over 10% of all known species. However, deforestation, illegal logging, and climate change are threatening its survival. Every minute, an area of rainforest larger than three football fields is lost, destroying critical habitats, accelerating climate change, and endangering indigenous communities. This campaign is dedicated to protecting the Amazon by funding reforestation, supporting indigenous guardians, and stopping illegal deforestation. Your support will help ensure that future generations can continue to benefit from this irreplaceable ecosystem.",
        thumbnail: Brazil.src,
        goal: 200000,
        raised: 124605,
      }
    },
    {
      coord: { lat: 11.602226711647168, lng: 9.917205453138182 }, // Nigeria, Africa
      campaign: {
        title: "Clean Water for Rural Africa",
        shortDesc: "Help us build clean water wells in remote villages across Africa. Your donation ensures access to safe drinking water and reduces waterborne diseases.",
        description : "Over 200 million people in rural Africa lack access to clean and safe drinking water. Women and children walk for hours every day just to fetch water from contaminated sources, leading to widespread diseases such as cholera, dysentery, and typhoid. The lack of clean water also impacts education, agriculture, and overall health, trapping many communities in a cycle of poverty. This campaign is dedicated to building wells, installing water filtration systems, and providing long-term solutions for clean water access in rural African villages. Every donation brings life-saving water to those who need it most.",
        thumbnail: Africa.src,
        goal: 100000,
        raised: 64120,
      }
    },
    {
      coord: { lat: 13.695295358402134, lng: 60.9956593463656 }, // Bangladesh
      campaign: {
        title: "Food Relief in Bangladesh",
        shortDesc: "Help us provide food assistance to families facing hunger in Bangladesh. Your donation will feed children and families in need.",
        description: "Bangladesh faces severe food insecurity, with millions struggling to access nutritious meals due to poverty, climate disasters, and economic hardships. Floods, cyclones, and rising food prices have made it even harder for families to put food on the table. Malnutrition is widespread, especially among children, leading to stunted growth, weakened immune systems, and increased mortality rates. This campaign aims to deliver emergency food aid, provide sustainable farming solutions, and support struggling families across Bangladesh. With blockchain-powered transparency, every donation ensures food reaches those who need it the most.",
        thumbnail: India.src,
        goal: 50000,
        raised: 37983,
      }
    },
]