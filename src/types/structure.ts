export type Campaign = {
  coord: Coordinate;
  campaign: CampaignDetailType;
}

export type CampaignDetailType = {
  title: string;
  description: string;
  shortDesc: string;
  goal: number;
  raised: number;
  thumbnail: string;
  deadline: string;
  institution: string;
}

export type Coordinate = {
  lat: number;
  lng: number;
  label?: string;
}
