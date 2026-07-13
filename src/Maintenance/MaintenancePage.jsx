import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import MaintenanceFeatureCard from "../components/MaintenanceFeatureCard";
import MaintenanceSectionHeader from "../components/MaintenanceSectionHeader";

function MaintenancePage() {
  return (
    <section className="w-full  py-8 sm:px-6 lg:px-8">
      <div className="mx-auto  rounded-4xl border border-slate-200 bg-white/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur sm:p-6 lg:p-10">
        <MaintenanceSectionHeader
          title="خدمات الصيانة الطبية والالكترونية"
          description="نحن نقدم خدمات صيانة موثوقة لأجهزتك الطبية لضمان التشغيل السلس"
        />

        <MaintenanceFeatureCard
          image="/Cpu_chip.webp"
          title="الصيانة الإلكترونية الدقيقة وإصلاح اللوحات الفنية"
          description="نتميز بالقدرة على تشخيص وإصلاح أعطال البوردات واللوحات الإلكترونية المعقدة للأجهزة الطبية، مع فحص واستبدال القطع الدقيقة واختبار الدوائر لضمان عودة الجهاز إلى حالته المصنعية بكفاءة عالية."
        />
        <MaintenanceFeatureCard
          image="/repair.jpeg"
          title="تشخيص الأعطال المتقدم للأجهزة الطبية"
          description="نعتمد على أحدث أدوات القياس والفحص الهندسي لتتبع الإشارات وتشخيص الأعطال البرمجية والكهربائية داخل الأجهزة الطبية. نضمن لك دقة متناهية في تحديد المشكلة ومعالجتها في أسرع وقت ممكن"
          reverse
        />

        <div className="mt-10 border-t border-slate-200 pt-8">
          <h3 className="mb-5 text-right text-2xl font-semibold text-slate-800">
            تواصل معنا
          </h3>

          <div className="flex flex-col gap-4 text-right md:flex-row md:flex-wrap">
            <a
              href="tel:+201234567890"
              className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-xl">
                📞
              </span>
              <div>
                <p className="text-sm text-slate-500">اتصل بنا</p>
                <p className="font-semibold text-slate-800">01014443918</p>
                <p className="font-semibold text-slate-800">01097203319</p>
              </div>
            </a>

            <a
              href="https://wa.me/+201014443918"
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-xl">
                <FaWhatsapp size={22} />
              </span>
              <div>
                <p className="text-sm text-slate-500">واتساب</p>
                <p className="font-semibold text-slate-800">تواصل عبر واتساب</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/share/14hKsQy6PaL/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-xl font-bold text-sky-700">
                <FaFacebook size={22} />
              </span>
              <div>
                <p className="text-sm text-slate-500">فيسبوك</p>
                <p className="font-semibold text-slate-800">زورنا على فيسبوك</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MaintenancePage;
