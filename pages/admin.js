import dynamic from "next/dynamic";
import config from "../admin-config";

const CMS = dynamic(
  () =>
    import("netlify-cms-app").then((cms) => {
      cms.registerMediaLibrary();
      cms.init({ config });
    }),
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage = () => {
  return <CMS />;
};

export default AdminPage;
