import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/client-images/gallery-1.png'
import img2 from '../assets/client-images/gallery-2.png'
import img3 from '../assets/client-images/gallery-3.webp'
import img4 from '../assets/client-images/gallery-4.webp'


const Section = styled.section`
  background-color: var(--light-cream);
  min-height: 100vh;
  padding: 0 5%;
  overflow: hidden;
  
  @media only screen and (min-width: 1440px) {
    padding: 0 10%;
  }
`

const MainContent =  styled.div`
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4%;
  margin-bottom: 2rem;

  @media only screen and (max-width: 576px) {
    flex-direction: column;
    height: 85%;
    justify-content: space-around;
    gap: 0%;
  }
`
const TextContent =  styled.div`
  width: 85%;
  flex: 4;
  
  @media only screen and (max-width: 576px) {
    flex: 3;
    width: 90%;
    text-align: justify;
    margin: auto;
  }
`

const Rational = styled.p`
  text-align: justify;
  line-height: 1.4;

  @media only screen and (min-width: 1440px) {
      line-height: 1.7;
  }

  @media only screen and (max-width: 768px) {
    line-height: 1.5;
  }
  @media only screen and (max-width: 576px) {
    line-height: 1.5;
  }
`

const Gallery = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-end;
    gap: .8rem;
  }
  @media only screen and (max-width: 576px) {
    align-items: center;
    width: 90%;
    margin: auto;
  }
`

const GalleryItem = styled.img`
  height: 36%;
  width: 46%;
  object-fit: cover;
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
  @media only screen and (max-width: 576px) {
    width: 70%;
    height: 20%;
  }
`

const Purchase = styled.h3`
  font-size: 1.3rem ;
  text-align: right;
`

const Email = styled.span`
  font-weight: 400;
`


const Credit = styled.p`
  font-size: .85rem;
  opacity: 0.7;
  text-align: left;
  margin: 0;
`

const DVD = () => {
  return (
    <Section>
        <h2>לומדת מולטימדיה</h2>

        <MainContent>
          <TextContent>
            <Rational>
              אנטומיה, פיזולוגיה, קנסיולוגיה, תורת הכושר הגופני עיוני, מדעי האימון,
               חדרי כושר, כושר גופני מעשי וביומכניקה הם ברובם קורסי חובה בתהליך הכשרת פרחי
              ההוראה בביה"ס להשתלמויות, ביה"ס ללמודים מתקדמים, ביה"ס לחינוך גופני ותנועה,
               פקולטה לרפואה בהתמחות ללימודי פיזיותרפיה, ובפקולטה לקניסיולוגיה
            </Rational>
            <Rational>
              <strong>הספרות בנושאים אלו רבה ויקרה מאד</strong>
            </Rational>
            <Rational>
            אלה נושאים מורכבים ודורשים הבנה עמוקה, שינון רב
            ותפיסה חזותית ובחלק רב נדרשים יכולות הפשטה ותפישה תלת מימדית.
            </Rational>
            <Rational>
             נדרש אמצעי שייסע בלמידה, יעורר את הסקרנות ויגביר את <strong>ההנאה</strong> והתובנות מהשילוב של
            תחומי הדעת השונים
            </Rational>
            <Rational>
             אנו עדים ל"תרבות הישיבה" ולהיבטיה השלילים (השמנה, גידול במחלות הלב וכלי הדם,
              עצלות ועוד). היעדר ידע ומוטיבציה לפעילות גופנית גורמים אף הם לתופעות לוואי שליליות: אי מימוש מטרות האימון,
               פציעות בספורט, בזבוז זמן ולבסוף אף נשירה מפעילות גופנית. לכן החלטתי לפתח מדריך מולטימדי נרחב בשווי <strong>300,000$</strong> שיהיה 
            <strong> שילוב מנצח </strong> 
            בין הידע המחקרי האקדמי
             בתחומים של מדעי גוף האדם לבין עשייה מושכלת ונבונה שיובילו לאורך חיים בריא
            </Rational>
            <Purchase>לרכישה צרו קשר <Email>yigalpinchas@gmail.com</Email></Purchase>
          </TextContent>
        <Gallery>
            <GalleryItem src={img1} alt={"Yigal Pinchas multimadia 1 - יגאל פנחס מולטימדיה"}/>
            <GalleryItem src={img2} alt={"Yigal Pinchas multimadia 2 - יגאל פנחס מולטימדיה"}/>
            <GalleryItem src={img3} alt={"Yigal Pinchas multimadia 3 - יגאל פנחס מולטימדיה"}/>
            <GalleryItem src={img4} alt={"Yigal Pinchas multimadia 4 - יגאל פנחס מולטימדיה"}/>
            <Credit>
            Multimedia Guide to Working Out in the Gym. Pinchas, Y & Katz, L. (2007). Sport Technology Research Lab., Savvy Knowledge Systems Crop., and University of Calgary, Alberta, Canada.
            </Credit>
        </Gallery>
        </MainContent>
    </Section>
  )
}

export default DVD