import { Button } from "./Button";

export const Main = () => {
  return (
    <main className="flex-1 container mx-auto p-4 flex flex-col justify-center items-center">
      <section className=" bg-gray-700 p-3 rounded-2xl text-center">
        <h2 className="font-bold p-2">Stock Prodictiob App</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          explicabo perferendis recusandae id voluptatum, et suscipit quod modi,
          saepe nisi consequuntur harum eum, blanditiis libero illum? Error
          nihil ex fugit, possimus sunt mollitia aliquid enim illum. Atque,
          repudiandae odio cum iure nemo ipsa ipsum sequi fuga eos voluptas
          pariatur possimus?
        </p>

        <Button
          text="Login"
          style="inline-block bg-blue-700 p-2 rounded-sm mt-4"
          url={"/login"}
        />

        {/* <button className="bg-blue-600 rounded-sm mt-3 p-2">Learn More</button> */}
      </section>
    </main>
  );
};
