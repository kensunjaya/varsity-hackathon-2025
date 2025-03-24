import Africa from "../images/africa.png";
import Australia from "../images/australia.png";
import Brazil from "../images/brazil.png";
import India from "../images/india.png";
import Jakarta from "../images/jakarta.png";

export const campaignData = [
    {
      coord: { lat: -10.298311837768393, lng: 86.95207521169927 }, // Jakarta, Indonesia
      campaign: {
        title: "Flood Relief in Jakarta",
        description: "Help us provide emergency relief to families affected by the recent floods in Jakarta. Your donation will provide food, shelter, and medical supplies to those in need.",
        thumbnail: Jakarta.src,
        goal: 75000,
        raised: 14361,
      }

    },
    {
      coord: { lat: -27.940115171073487, lng: 110.079395477373 }, // Australia
      campaign: {
        title: "Plant Trees in Australia",
        description: "Help us plant trees in Australia to restore habitats for endangered species and reduce carbon emissions.",
        thumbnail: Australia.src,
        goal: 50000,
        raised: 24605,
      }
    },
    {
      coord: { lat: -8.147756571714984, lng: -55.183324412178614 }, // Brazil
      campaign: {
        title: "Protect the Amazon Rainforest",
        description: "Help us protect the Amazon Rainforest by supporting local communities and promoting sustainable practices.",
        thumbnail: Brazil.src,
        goal: 200000,
        raised: 124605,
      }
    },
    {
      coord: { lat: 11.602226711647168, lng: 9.917205453138182 }, // Nigeria, Africa
      campaign: {
        title: "Clean Water for Rural Africa",
        description: "Help us build clean water wells in remote villages across Africa. Your donation ensures access to safe drinking water and reduces waterborne diseases.",
        thumbnail: Africa.src,
        goal: 100000,
        raised: 64120,
      }
    },
    {
      coord: { lat: 13.695295358402134, lng: 60.9956593463656 }, // Bangladesh
      campaign: {
        title: "Food Relief in Bangladesh",
        description: "Help us provide food assistance to families facing hunger in Bangladesh. Your donation will feed children and families in need.",
        thumbnail: India.src,
        goal: 50000,
        raised: 37983,
      }
    },
]