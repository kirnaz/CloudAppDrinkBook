import UU5 from "uu5g04";
import UunBcaa21sft04 from "uun_bcaa21sft04_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UunBcaa21sft04.Bricks.FindeRecipe`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UunBcaa21sft04.Bricks.FindeRecipe />);
    expect(wrapper).toMatchSnapshot();
  });
});
