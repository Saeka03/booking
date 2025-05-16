"use client";

import { useEffect, useState } from "react";
import Contents from "./components/Contents";
import { createClient } from "@/utils/supabase/client";

export default function Home() {
  const [isUser, setIsUser] = useState<boolean>(false);

  useEffect(() => {
    const fetchSupabase = async () => {
      const supabase = await createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        setIsUser(false);
      } else {
        setIsUser(true);
      }
    };

    fetchSupabase();
  }, []);

  console.log(isUser);

  return <Contents isUser={isUser} />;
}
