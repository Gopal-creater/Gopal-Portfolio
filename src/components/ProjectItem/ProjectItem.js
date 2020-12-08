import React from 'react'

export default function ProjectItem() {
    return (
        <div>
            <div className='col-md-4'>
                <div class="card project-card-container">
                    <img class="card-img-top" src={reactimg} />
                    <div class="card-body">
                        <h5 class="card-title">Simple Shopping Site</h5>
                        <p class="card-text">A simple shopping site where people shop varieties of groseries and things they needed.</p>
                        <a href="#" class="btn btn-primary">View In Detail</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
