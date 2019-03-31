class SectionsController < ApplicationController
  def index
    @sections = Section.sorted
  end

  def show
    @sections = Section.find(params[:id])
  end

  def new
    @section = Section.new
  end

  def create
    @section = Section.new(section_params)
    if @section.save
      flash[:notice] = "Section created successfully"
      redirect_to(sections_path)
    else
      render('new')
    end
  end

  def edit
    @page = Page.find(params[:id])
  end

  def update
    @section = Section.find(params[:id])
    if @section.update_attributes(section_params)
      flash[:notice] = "Section updated successfully"
      redirect_to(section_path(@section))
    else
      render('edit')
    end
  end

  def delete
    @page = Page.find(params[:id])
  end

  def destroy
    @section = Section.find(params[:id])
    @section.destroy
    flash[:notice] = "Section updated successfully"
    redirect_to(sections_path)
  end

  private
  def section_params
    params.require(:section).permit(:name, :position, :visible, :page_id, :content_type, :content)
  end

end
