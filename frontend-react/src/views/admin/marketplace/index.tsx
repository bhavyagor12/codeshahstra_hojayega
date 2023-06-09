import Banner from "./components/Banner";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import EmployeeCard from "./components/EmployeeCard";
import { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    fetch("http://localhost:9000/getAllEmployees", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
          setEmployees(getEmployeeArray(data));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEmployeeArray = (employees: any) => {
    let initialemployee = [];
    initialemployee = employees?.map((e: any) => {
      return {
        id: e.id,
        aadharID: e.aadharID,
        img: e.img,
        name: e.name,
      };
    });
    return initialemployee;
  };

  useEffect(() => {
    getEmployees();
  }, []);
  return (
    <div className="mt-3 grid h-full min-h-screen grid-cols-1 gap-5 ">
      <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner />
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Employees
          </h4>
        </div>
        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          {employees.length > 0 &&
            employees.map((e: any) => {
              return (
                <EmployeeCard
                  id={e.id}
                  title={e.name}
                  author={e.aadharID}
                  image={e.img}
                />
              );
            })}
          <EmployeeCard
            id="1"
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt3}
          />
          <EmployeeCard
            id="1"
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt2}
          />
          <EmployeeCard
            id="1"
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt4}
          />
        </div>

        {/* Recenlty Added setion */}

        {/* Recently Add NFTs */}
      </div>

      {/* right side section */}

      {/* <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <TopCreatorTable tableData={tableDataTopCreators} />
        <div className="mb-5" />
        <HistoryCard />
      </div> */}
    </div>
  );
};

export default EmployeeList;
