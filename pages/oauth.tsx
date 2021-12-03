import { GetServerSideProps } from "next";
import React from "react";
import { auth } from "services/firebase-debug";

const useFirebaseUser = () => {
  console.log("Auth:", String(auth));

  return { auth: String(auth) };
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  return {
    props: {
      clientId: "_clientId",
      redirectUri: "_redirectUri",
      state: "_state",
      clientName: "_clientName",
      clientDomain: "_clientDomain",
      clientInternal: "_clientInternal",
    },
  };
};

export default function OAuth({
  redirectUri,
  state,
  clientId,
  clientName,
  clientDomain,
  clientInternal = false,
}: {
  redirectUri: string;
  state: string;
  clientId: string;
  clientName: string;
  clientDomain: string;
  clientInternal: boolean;
}) {
  const { auth } = useFirebaseUser();

  return (
    <div>
      <p>time: {String(new Date())}</p>
      <p>auth: {String(auth)}</p>
    </div>
  );
}
