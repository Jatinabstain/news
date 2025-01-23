import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import pm from '../../public/assets/pm.jpg';
import mp from '../../public/assets/mp.jpg';
import german from '../../public/assets/german.jpg';
import allu from '../../public/assets/aalu.jpg';
import jaipur from '../../public/assets/jaipur.jpg';
import Link from 'next/link';
import Image from 'next/image';
import ads1 from '../../public/assets/ads1.jpg';
import ad2 from '../../public/assets/ad2.jpg';
import tranding1 from '../../public/assets/tranding1.jpg';
import tranding2 from '../../public/assets/tranding2.jpg';
import tranding3 from '../../public/assets/tranding3.jpg';
import bigAd from '../../public/assets/big-ads.jpg';
import ad3 from '../../public/assets/ad3.jpg'
import ad4 from '../../public/assets/ad4.jpg'
import tagIcon from '../../public/assets/tag-icon.svg';
import newsImg from '../../public/assets/news1.jpg';
import indiaNews from '../../public/assets/india.jpg';
import indiaNews2 from '../../public/assets/india2.jpg';
import crime from '../../public/assets/crime.jpg';
import sports from '../../public/assets/sports.jpg';
import video from '../../public/assets/video.jpg';
import sports2 from '../../public/assets/sports2.jpg';
import tamil from '../../public/assets/tamil.jpg';
import sports3 from '../../public/assets/sports3.jpg';
import sports4 from '../../public/assets/sports4.jpg';
import tech from '../../public/assets/tech.jpg';
import world from '../../public/assets/world.jpg';
import up from '../../public/assets/up.jpg';
import sports5 from '../../public/assets/sports5.jpg';
import e1 from '../../public/assets/e1.jpg';
import e2 from '../../public/assets/e2.jpg';
import e3 from '../../public/assets/e3.jpg';
import e4 from '../../public/assets/e4.jpg';
import b1 from '../../public/assets/b1.jpg';
import l1 from '../../public/assets/l1.jpg';
import s1 from '../../public/assets/s1.jpg';
import h1 from '../../public/assets/h1.jpg';
import w1 from '../../public/assets/w1.jpg';
import ImageTopCard from '@/app/components/imageTopCard';
import NewsList from '@/app/components/newsList';
import NewsCardBigLeft from '@/app/components/imageCardBigLeft';
import NewsCardBigLeftSmall from '@/app/components/imageCardBigLeftSmall';
import TopPicks from '@/app/components/topPicks';
import { NewsCardTopItem } from '@/types/newsCardTop';
import { NewsListItem } from '@/types/newslist';
import { NewsCardBigLeftItem } from '@/types/newsCardBigLeft';
import { NewsCardBigLeftSmallItem } from '@/types/newsCardBigLeftSmall';
import NewsCardBigLeftInfo from '@/app/components/imageCardBigLeftInfo';
import { NewsCardBigLeftInfoItem } from '@/types/newsCardBigLeftInfo';
import CategoryCard from '@/app/components/categoryCard';
import { CategoryCardTopItem } from '@/types/categoryCardTop';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};
const newsCardTopItems: NewsCardTopItem[] = [
  { id: '1', img: newsImg, tag: 'Uttar Pradesh', content: 'CM Yogi increases Jewar Airport land compensation by Rs 1,200 per sqm, farmers welcome decision', href: '#' },
  { id: '2', img: indiaNews, tag: 'India', content: 'OPINION Parliament fight should not have gone to Police', href: '#' },
  { id: '3', img: indiaNews2, tag: 'India', content: 'MCD issues order to identify illegal Bangladeshi migrant children in Delhi schools', href: '#' },
  { id: '4', img: crime, tag: 'Crime', content: 'Delhi cab driver stabbed to death by passengers over paying Rs 400 taxi fair', href: '#' },
]

const newsListItems: NewsListItem[] = [
  { id: '1', title: 'Railways to run special train from Bengaluru for Christmas, Mahakumbh Mela 2025', href: '#' },
  { id: '2', title: 'India-Kuwait relations elevated to \'strategic partnership\' as PM Modi holds talks with Amir', href: '#' },
  { id: '3', title: 'Renuka Singh, Smriti Mandhana lead India to record-breaking win against West Indies in first', href: '#' },
  { id: '4', title: 'Puja Khedkar case: Delhi High Court to pass order on former IAS anticipatory bail plea today', href: '#' },
  { id: '5', title: 'OPINION Remove DeepFake Videos: High Court Protects My Personality Rights', href: '#' }
]

const newsCardBigLeftItems: NewsCardBigLeftItem[] = [
  { id: '1', img: sports, title: 'India TV Sports Wrap on December 21: Today\s top 10 trending news stories', tag: 'Sports', content: 'India TV Sports Wrap on December 21: From all the kabaddi action to the cricketing circuit, here are all the top 10 trending sports news stories and the latest happenings from the world of', href: '#' },
  { id: '2', img: video, title: 'Aaj Ka Rashifal : Shubh Muhurat | Today Bhavishyavani with Acharya Indu Prakash, 21 Dec, 2024', tag: 'Video', content: 'OPINION | Parliament\'s fight should not have gone to Police ', href: '#' },
  { id: '3', img: sports2, title: 'Nathan McSweeney reacts after getting dropped from Australia\s squad for India series | WATCH', tag: 'Sports', content: 'Nathan McSweeney was picked ahead of players like Sam Konstas, Cameron Bancroft, Matt Renshaw and Marcus Harris. McSweeney could not score a single half-century after playing the first', href: '#' },
  { id: '4', img: tamil, title: 'K Annamalai detained during protests against funeral procession of Coimbatore blast mastermind', tag: 'Tamil Nadu', content: 'Tamil Nadu BJP President K Annamalai said that the incompetent DMK government arrested all of them, including the Hindu Munnani State President Kadeshwara C. Subramaniam.', href: '#' },
  { id: '5', img: sports3, title: 'Sri Lanka Cricket amends constitution for \'good governance and transparency\'', tag: 'Sports', content: 'Sri Lanka Cricket drafted its constitution after the team\'s triumph at the 1996 ODI World Cup. Since then, there have been little to no reforms to the constitution of the cricketing', href: '#' },
  { id: '6', img: sports4, title: 'Series wins at home but global tournaments still remain Achilles Heel for Indian women\'s team', tag: 'Sports', content: 'It was a really mixed year for the Indian women as they failed to qualify for the T20 World Cup semis and also faltered in the Asia Cup final. There were a few series wins at home and also', href: '#' },
  { id: '7', img: tech, title: 'High electricity bills? Here\'s how to identify and resolve faulty meter readings', tag: 'Technology', content: 'If your electricity bills are skyrocketing then this article is for you. Here are ways to check your meter, identify the issue and will let you know if your meter is faulty.', href: '#' },
  { id: '8', img: world, title: 'Nepal hit by 4.8 magnitude earthquake, no casualties reported', tag: 'World', content: 'A 4.8 magnitude earthquake shook Nepal early Saturday morning, according to the National Centre for Seismology (NCS). The tremor, recorded at a depth of 10 kilometers, caused no casualties', href: '#' },
  { id: '9', img: up, title: 'Man dragged for 30 km after being hit by UP govt official\'s car in Bahraich', tag: 'Uttar Pradesh', content: 'The tragic incident unfolded in Uttar Pradesh\'s Bahraich district on the Bahraich-Nanpara road. The driver involved in the accident has been suspended while the govt official Naib Tehsildar', href: '#' },
  { id: '10', img: sports5, title: 'Ravichandran Ashwin\'s wife Prithi pens down emotional tribute to \'all-time favourite cricketer\'', tag: 'Sports', content: 'Ravichandran Ashwin retired from all forms of the game on December 18 - the last day of the Gabba Test between India and Australia. Ashwin did a cameo at the post-match press conference and', href: '#' },
]

const newsCardBigLeftSmallItems: NewsCardBigLeftSmallItem[] = [
  { id: '1', img: tranding1, title: 'Woman dressed as Manjulika sets stage ablaze with Giddha moves, video goes viral', tag: 'Trending', href: '#' },
  { id: '2', img: tranding2, title: 'Viral video of huge chocolate chip cookie made in a cement mixer leaves internet baffled | WATCH', tag: 'Trending', href: '#' },
  { id: '3', img: tranding3, title: 'Spherical egg fetches record price in UK, buyer says \'money spent well\'', tag: 'Trending', href: '#' },
]

const newsCardBigLeftInfoItems: NewsCardBigLeftInfoItem[] = [
  { id: '1', img: e1, title: 'Allu Arjun fires back at social media users for using of abusive language | See Post', tag: 'Entertainment', date: 'December 22, 2024', content: 'Allu Arjun fires back at social media users for using of abusive language | See Post Pushpa 2 actor Allu Arjun held a press conference for the first time yesterday after the stampede during the screening of Pushpa 2 at Sandhya Theater in Hyderabad. Allu responded to those who held him responsible for the woman who died in the stampede and the suffering child admitted to the hospital. On Sunday, the Pan India star urged fans not to use any kind of abusive language offline or online. He also wrote that people abusing with his image on their display picture will suffer consequences.', href: '#' },
  { id: '2', img: e2, title: 'Yearender 2024: Sector 36 to Chamkila, 5 Netflix films with better storylines than several theatrical releases', tag: 'Entertainment', date: 'December 22, 2024', content: 'Yearender 2024: Sector 36 to Chamkila, 5 Netflix films with better storylines than several theatrical releases 2024 is coming to an end and with this, the curtains for the film season this year will also drop. 2024 was filled with several releases, theatrical and OTT both! And where several big-budget films failed to attract audiences in the theatres, several OTT releases became the talk of the town. In the same progression, where several OTT platforms offered numerous films, OTT giant Netflix lived up to the expectations this year. Not only did it bring new stories but also backed films with good storylines and plots, so much so that they seemed bigger than theatrical releases. Hence, let\'s have a look at 5 Netflix films that were better than several big-budget theatrical releases. ', href: '#' },
  { id: '3', img: e3, title: 'AP Dhillon vs Diljit Dosanjh clash continues, Canadian singer shares proof after actor\'s clarification', tag: 'Entertainment', date: 'December 22, 2024', content: 'AP Dhillon vs Diljit Dosanjh clash continues, Canadian singer shares proof after actor\'s clarification Singer Diljit Dosanjh recently spoke about Karan Aujla and AP Dhillon on starting their shows in India during his Indore concert. The singer-turned-actor congratulated both and said that the era for individual singers has begun. However, AP Dhillon took a dig at fellow superstar during his concert in Chandigarh. He commented in the middle of the performance that went viral in no time. This has sparked a debate on social media and fans have been divided into two factions. At the same time, Diljit has also been seen giving his reaction to Dhillon\'s comment.', href: '#' },
  { id: '4', img: e4, title: 'CID 2 X Review: Here\'s what social media thinks of ACP Pradhyuman, Abhijeet, Daya\'s return', tag: 'Entertainment', date: 'December 22, 2024', content: 'CID 2 X Review: Here\'s what social media thinks of ACP Pradhyuman, Abhijeet, Daya\'s return The famous 90s crime investigation show CID is back with its much-awaited second season. The first episode of CID 2 was released on Sony TV and Sony Liv on December 21 and fans have fallen in love with the iconic trio Shivaji Satam, Aditya Srivastava, and Dayanand Shetty all over again. Their much-loved characters ACP Pradyuman, and Inspectors Abhijeet and Daya are back with their crime cases. As soon as the first episode was released, fans expressed their happiness on X (formerly Twitter). So why wait, read its X review here. ', href: '#' },
]

const categoryCardTopItems: CategoryCardTopItem[] = [
  { id: '1', img: b1, tag: 'Business', category: 'Business', href: '#', title: 'DAM Capital Advisors IPO, Mamata Machinery IPO: GMP skyrockets; last date today' },
  { id: '2', img: l1, tag: 'Lifestyle', category: 'Lifestyle', href: '#', title: 'Today\'s news headlines and thought for school assembly [23 December 2024]' },
  { id: '3', img: s1, tag: 'Sports', category: 'Sports', href: '#', title: 'Sam Konstas\' coach travels to Melbourne to prepare him for Boxing Day Test challenge' },
  { id: '4', img: h1, tag: 'Health', category: 'Health', href: '#', title: 'Beyond pregnancy, PCOS: Gynae decodes the many causes of irregular periods' },
]

const categoryCardTopItems2: CategoryCardTopItem[] = [
  { id: '1', img: b1, tag: 'Business', category: '', href: '#', title: 'DAM Capital Advisors IPO, Mamata Machinery IPO: GMP skyrockets; last date today' },
  { id: '2', img: w1, tag: 'WORLD', category: '', href: '#', title: 'MEA condemns Christmas market attack in Germany, says \'in contact with injured Indians and families\'' }
]

const newsListItems2: NewsListItem[] = [
  { id: '1', title: 'Indian-origin man asks King Charles about his health, Monarch witty reply', href: '#' },
  { id: '2', title: 'Brazil: 10 dead, several injured after plane crashes into home, shop in', href: '#' },
  { id: '3', title: 'India-Kuwait relations elevated to \'strategic partnership\' as PM Modi', href: '#' },
  { id: '4', title: 'Britain\'s shadow minister Priti Patel wants China on UK\'s national security', href: '#' },
  { id: '5', title: '\'Honoured\', says PM Modi as he dedicates Kuwait\'s \'Mubarak Al Kabeer\'', href: '#' },
  { id: '6', title: 'PM Modi visits Gulf Spic Labour Camp in Kuwait, meets Indian workers | VIDEO', href: '#' }
]

const newsListItems3: NewsListItem[] = [
  { id: '1', title: 'Trump threatens to retake Panama Canal, highlights \'unfair treatment\' to US Navy', href: '#' },
  { id: '2', title: 'Sri Sri Ravi Shankar\'s \'World Meditates With Gurudev\' event breaks largest', href: '#' },
  { id: '3', title: 'Congo: 38 dead, over 100 missing after ferry capsizes in Busira river', href: '#' },
  { id: '4', title: 'MEA condemns Christmas market attack in Germany, says \'in contact with injured', href: '#' },
  { id: '5', title: 'Germany car crash: Death count rises to 5, condolences from world leaders pour', href: '#' },
  { id: '6', title: 'Days after concluding India tour, Sri Lankan President Dissanayake', href: '#' }
]

export default function PageLayout({  }: Props) {
  const t = useTranslations('PageLayout');

  return (
    <>
      <section className="top_section">
        <div className="mx-auto max-w-7xl px-2 lg:px-4">
          <div className="grid grid-rows-2 md:grid-flow-col gap-4 news_grids">
            <div className="row-span-2 bg-slate-600 col-span-2 news_grid">
              <Link href="#">
                <Image alt="Mountains" src={pm} placeholder="blur" quality={100} fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <p>{t('PM Modi embarks on historic visit to Kuwait: First Indian Prime Minister tour in 43 years')}</p>
              </Link>
            </div>
            <div className="row-span-1 col-span-1 bg-slate-600 news_grid">
              <Link href="#">
                <Image alt="Mountains" src={mp} placeholder="blur" quality={100} fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <p>{t('Madhya Pradesh: Four of a family die in fire at milk parlour-cum-residence in Dewas')}</p>
              </Link>
            </div>
            <div className="row-span-1 col-span-1 bg-slate-600 news_grid">
              <Link href="#">
                <Image alt="Mountains" src={german} placeholder="blur" quality={100} fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <p>{t('Germany: 2 dead, 68 injured in suspected attack at Magdeburg Christmas market, Saudi man arrested')}</p>
              </Link>
            </div>
            <div className="row-span-1 col-span-1 bg-slate-600 news_grid">
              <Link href="#">
                <Image alt="Mountains" src={jaipur} placeholder="blur" quality={100} fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <p>{t('Jaipur tanker explosion: Death count rises to 14 as half of injured in critical condition')}</p>
              </Link>
            </div>
            <div className="row-span-1 col-span-1 bg-slate-600 news_grid">
              <Link href="#">
                <Image alt="Mountains" src={allu} placeholder="blur" quality={100} fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
                <p>{t('Allu Arjun\'s Pushpa 2 enters Rs 1,000 cr club, earns THIS much on Day 16')}</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="top_section">
        <div className="mx-auto max-w-7xl px-2 lg:px-4">
          <div className="flex md:flex-row flex-col gap-4">
            {/* Row 1 */}
            <div className="basis-1/4">
              <ImageTopCard newsCardTopItems={newsCardTopItems} />
              <Image
                src={ads1}
                alt="ads"
                className="img-fluid mb-4"
              />
              <div className="news_list">
                <NewsList newsListItems={newsListItems} />
              </div>
            </div>
            {/* Row 2 */}
            <div className="basis-1/2">
              <NewsCardBigLeft newsCardBigLeftItems={newsCardBigLeftItems} />
            </div>
            {/* Row 3 */}
            <div className="basis-1/4">
              <Image
                src={ad2}
                alt="ads"
                className="img-fluid mb-4"
              />
              <div className="icon_heading flex gap-x-1 items-center">
                <Image src={tagIcon} alt="tag" style={{objectFit: "contain"}} />
                <h2>Don&apos;t Miss</h2>
              </div>
              <NewsCardBigLeftSmall newsCardBigLeftSmallItems={newsCardBigLeftSmallItems} />
              <Image
                src={ad2}
                alt="ads"
                className="img-fluid mb-4"
              />
              <div className="icon_heading flex gap-x-1 items-center">
                <Image src={tagIcon} alt="tag" style={{objectFit: "contain"}} />
                <h2>Top Picks</h2>
              </div>

              <TopPicks />

              <Image
                src={ads1}
                alt="ads"
                className="img-fluid mb-4"
              />
            </div>
          </div>
          <div className="big_ad">
            <Image
              src={bigAd}
              alt="ads"
              className="img-fluid mt-4"
            />
          </div>
        </div>
      </section>
      <section className="single_category">
        <div className="mx-auto max-w-7xl px-2 lg:px-4">
          <div className="heading_category">
            <div className="point"></div>
            <h2>Entertainment</h2>
          </div>
          <div className="flex md:flex-row flex-col gap-4 mb-7">
            <div className="basis-3/4">
              <NewsCardBigLeftInfo newsCardBigLeftInfoItems={newsCardBigLeftInfoItems} />
            </div>
            <div className="basis-1/4">
              <Image
                src={ad3}
                alt="ads"
                className="img-fluid mb-4"
              />
              <Image
                src={ad4}
                alt="ads"
                className="img-fluid mb-4"
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <CategoryCard categoryCardTopItems={categoryCardTopItems} />
          </div>
        </div>
      </section>

      <section className="single_category">
        <div className="mx-auto max-w-7xl px-2 lg:px-4">
          <div className="heading_category">
            <div className="point"></div>
            <h2>World</h2>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 items-start mb-4">
            <CategoryCard categoryCardTopItems={categoryCardTopItems2} />
            <div className="news_list">
              <NewsList newsListItems={newsListItems2} />
            </div>
            <div className="news_list">
              <NewsList newsListItems={newsListItems3} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
