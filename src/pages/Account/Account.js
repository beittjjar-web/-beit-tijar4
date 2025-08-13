import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Account = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) return <p>تحميل...</p>;
  if (!user) return <p>من فضلك قم بتسجيل الدخول أولاً.</p>;

  return (
    <div>
      <h2>مرحبًا، {user.email}</h2>
      <p>اسم المستخدم: {user.username}</p>
      <p>البريد الإلكتروني: {user.email}</p>
      {/* أضف المزيد من المعلومات حسب الحاجة */}
    </div>
  );
};

export default Account;
