import { Link, useParams } from "react-router-dom"; 
import "../styelComponents/GameDetails.css"; 
import useSingleGame from "../hooks/useSingelGame"; 
import { useEffect, useState } from "react"; 
const GameDetails = () => {
    const { id } = useParams(); // الحصول على معرّف اللعبة من URL
    const { data, isLoading, error } = useSingleGame(id); // استدعاء hook لجلب بيانات اللعبة بناءً على id
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // تعريف حالة لتخزين مؤشر الصورة الحالية في المعرض
    useEffect(() => {
        if (data?.screenshots) { // التحقق من وجود صور اللعبة
            const interval = setInterval(() => { // إعداد مؤقت لتغيير الصورة كل 3 ثواني
                setCurrentImageIndex((prev) => 
                    (prev + 1) % (data.screenshots.length || 1) // تحديث المؤشر وتكرار الصور عند الوصول للنهاية
                );
            }, 3000); // تعيين فترة التغيير إلى 3 ثواني
            return () => clearInterval(interval); // تنظيف المؤقت عند تغيير البيانات أو عند مغادرة الصفحة
        }
    }, [data]); // إعادة تنفيذ useEffect عند تغيير بيانات اللعبة

    // التعامل مع حالات التحميل والأخطاء
    if (isLoading) return <div className="loading">Loading game details...</div>; // إذا كانت البيانات لا تزال محملة
    if (error) return <div className="error">Error fetching game details</div>; // إذا حدث خطأ في جلب البيانات
    if (!data) return null; // إذا لم تكن هناك بيانات للعرض

    // تفكيك بيانات اللعبة المستلمة لتسهيل استخدامها في المكونات
    const {
        name,
        name_original,
        background_image: image,
        rating,
        metacritic,
        metacritic_url,
        description_raw: description,
        released,
        platforms,
        genres,
        developers,
        publishers,
        screenshots,
        website,
        tags,
        esrb_rating,
        playtime,
        achievements_count,
        ratings_count,
        added,
        creators_count,
        reddit_url,
        reddit_name,
        twitch_count,
        youtube_count,
        alternative_names,
        suggestions_count,
        reviews_text_count,
    } = data;

    return (
        <div className="game-details-page"> {/* حاوية الصفحة التي تعرض تفاصيل اللعبة */}
            <div className="game-details-container"> {/* حاوية رئيسية للمحتوى */}
                <header className="game-details-header"> {/* رأس الصفحة الذي يحتوي على العنوان وزر العودة */}
                    <Link to="/" className="game-details-button">Back To Home</Link> {/* رابط للعودة إلى الصفحة الرئيسية */}
                    <h2 className="game-title">{name}</h2> {/* اسم اللعبة */}
                    {name_original && name_original !== name && ( // إذا كان هناك اسم أصلي يختلف عن الاسم الحالي
                        <h3 className="game-original-title">Original: {name_original}</h3>
                    )}
                </header>

                <div className="game-details-content"> {/* محتوى تفاصيل اللعبة */}
                    <div className="image-slider"> {/* شريط الصور المتحرك */}
                        <img 
                            src={screenshots?.[currentImageIndex]?.image || image} // عرض الصورة الحالية من المعرض أو صورة الخلفية
                            alt={name} 
                            className="game-image" 
                        />
                        {screenshots && screenshots.length > 0 && ( // إذا كان هناك لقطات للعبة
                            <div className="slider-controls"> {/* أدوات التحكم في شريط الصور */}
                                {screenshots.map((_, index) => ( // إنشاء أزرار للتحكم في الصور
                                    <button
                                        key={index}
                                        className={`slider-dot ${index === currentImageIndex ? 'active' : ''}`} // تمييز الزر النشط
                                        onClick={() => setCurrentImageIndex(index)} // تغيير الصورة عند النقر على الزر
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="game-info"> {/* قسم معلومات اللعبة */}
                        <div className="game-info-primary"> {/* معلومات أساسية عن اللعبة */}
                            <p><span className="game-data">Rating:</span> {rating} ⭐</p> {/* تصنيف اللعبة */}
                            <p><span className="game-data">Metacritic Score:</span> {metacritic}</p> {/* نتيجة Metacritic */}
                            <p><span className="game-data">Released:</span> {released}</p> {/* تاريخ الإصدار */}
                            <p><span className="game-data">ESRB Rating:</span> {esrb_rating?.name || 'Not rated'}</p> {/* تصنيف ESRB */}
                            <p><span className="game-data">Playtime:</span> {playtime} hours</p> {/* وقت اللعب */}
                            <p><span className="game-data">Total Ratings:</span> {ratings_count}</p> {/* إجمالي التقييمات */}
                        </div>

                        <div className="game-info-secondary"> {/* معلومات إضافية عن اللعبة */}
                            <p><span className="game-data">Platforms:</span> {platforms?.map(p => p.platform.name).join(", ")}</p> {/* منصات اللعبة */}
                            <p><span className="game-data">Genres:</span> {genres?.map(g => g.name).join(", ")}</p> {/* أنواع اللعبة */}
                            <p><span className="game-data">Developers:</span> {developers?.map(d => d.name).join(", ")}</p> {/* مطورو اللعبة */}
                            <p><span className="game-data">Publishers:</span> {publishers?.map(p => p.name).join(", ")}</p> {/* ناشرو اللعبة */}
                        </div>

                        <div className="game-stats"> {/* قسم إحصائيات اللعبة */}
                            <h3 className="section-title">Game Statistics</h3>
                            <div className="stats-grid"> {/* شبكة الإحصائيات */}
                                <div className="stat-item">
                                    <span className="stat-label">Achievements:</span>
                                    <span className="stat-value">{achievements_count}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Added by Users:</span>
                                    <span className="stat-value">{added}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Creators:</span>
                                    <span className="stat-value">{creators_count}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Suggestions:</span>
                                    <span className="stat-value">{suggestions_count}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Reviews:</span>
                                    <span className="stat-value">{reviews_text_count}</span>
                                </div>
                            </div>
                        </div>

                        <div className="social-media"> {/* قسم وسائل التواصل الاجتماعي والمجتمع */}
                            <h3 className="section-title">Social Media & Community</h3>
                            <div className="social-grid"> {/* شبكة الروابط الاجتماعية */}
                                {website && ( // إذا كان هناك موقع إلكتروني
                                    <a href={website} target="_blank" rel="noopener noreferrer" className="social-link">
                                        Official Website
                                    </a>
                                )}
                                {reddit_url && ( // إذا كان هناك رابط لـ Reddit
                                    <a href={reddit_url} target="_blank" rel="noopener noreferrer" className="social-link">
                                        Reddit Community {reddit_name}
                                    </a>
                                )}
                                {metacritic_url && ( // إذا كان هناك رابط لـ Metacritic
                                    <a href={metacritic_url} target="_blank" rel="noopener noreferrer" className="social-link">
                                        Metacritic Page
                                    </a>
                                )}
                                <div className="social-stats">
                                    {twitch_count && <p>Twitch Streams: {twitch_count}</p>} {/* عدد البثوث على Twitch */}
                                    {youtube_count && <p>YouTube Videos: {youtube_count}</p>} {/* عدد مقاطع الفيديو على YouTube */}
                                </div>
                            </div>
                        </div>

                        {alternative_names?.length > 0 && ( // إذا كانت هناك أسماء بديلة
                            <div className="alternative-names"> {/* عرض الأسماء البديلة */}
                                <h3 className="section-title">Alternative Names</h3>
                                <div className="names-container">
                                    {alternative_names.map((name, index) => ( // تكرار الأسماء البديلة
                                        <span key={index} className="alt-name">{name}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="game-tags"> {/* قسم العلامات الخاصة باللعبة */}
                            <p><span className="game-data">Tags:</span></p>
                            <div className="tags-container"> {/* حاوية العلامات */}
                                {tags?.map(tag => ( // عرض العلامات المرتبطة باللعبة
                                    <span key={tag.id} className="tag">{tag.name}</span>
                                ))}
                            </div>
                        </div>

                        <div className="game-description"> {/* قسم وصف اللعبة */}
                            <p><span className="game-data">Description:</span></p>
                            <p className="description-text">{description}</p> {/* نص الوصف */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails; // تصدير المكون لتستخدمه في أماكن أخرى
