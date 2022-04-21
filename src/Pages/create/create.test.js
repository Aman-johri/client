import Create from "./Create";
import {shallow,configure} from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

describe("Testing", () => {
    it("snapshot test for Create Post", () => {
        const component = shallow(<Create />);
        const tree = component.debug();
        expect(tree).toMatchSnapshot();
    });
    
    it("check State", () => {
    const component = shallow(<Create />);
    expect(component.state("title")).toEqual("");
    expect(component.state("desc")).toEqual("");
    });

    it("check for title field", () => {
        const component = shallow(<Create />);
        component.setState({ title: "Aman Johri" });
        expect(component.state("title")).toEqual("Aman Johri");
    });
    
    it("check for description", () => {
        const component = shallow(<Create />);
        component.setState({ desc: "Hello, I am Aman Johri" });
        expect(component.state("desc")).toEqual("Hello, I am Aman Johri");
    });

    it("Button not works when any field is empty", () => {
        const component = shallow(
          <Create />
        );
        const instance = component.instance();
        jest.spyOn(instance, "handleClick");
        component.setState({ title: "Aman Johri", desc: "Hello, I am Aman Johri" });
        component.find(".writeSubmit2").simulate("click");
        expect(instance.handleClick).toHaveBeenCalledTimes(0);
      });

    it("Button works when all field is filled", () => {
      const component = shallow(
        <Create/>
      );
      const instance = component.instance();
      jest.spyOn(instance, "handleClick");
      component.setState({ title: "Aman Johri", desc: "Hello, I am Aman Johri", categories:"life" });
      component.find(".writeSubmit2").simulate("click");
      expect(instance.handleClick).toBeCalledTimes(0);


    });
    
    });


