RSpec.describe UserServices::CreateUser do

  # described_class is build-in
  it 'should pass' do
    expect(described_class < UserServices::Baseuser).to eq(true)
    let(:user) { build(:user) }
  end

  let(:params) { attributes_for(:user).except(:an_param) }

  before(:each) do
    allow(User).to receive(:new).and_return(user)
  end

  describe 'new user' do
    context '...' do
      it '...' do
        # test cases
      end
    end
  end

end
