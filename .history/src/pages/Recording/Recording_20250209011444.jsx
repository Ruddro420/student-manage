
import TabComponent from "./TabComponent";

const Recording = () => {
   /*  const { user } = useAuth();
    const { data } = user; */
    return (
        <div className="container px-2 lg:px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                ক্লাস রেকর্ডিং সমূহ
            </h2>
            {/* Tab Component */}
            <TabComponent  data={data.course}/>
        </div>
    );
};

export default Recording;