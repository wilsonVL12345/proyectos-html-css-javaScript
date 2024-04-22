<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\DB;
use Livewire\Component;

class ProductsTable extends Component
{
    public $search = '';
    public $products;

    public function mount()
    {
        $this->getProducts();
    }

    public function updatedSearch()
    {
        $this->getProducts();
    }

    public function getProducts()
    {
        $this->products = DB::table('products')
            ->where('name', 'like', '%' . $this->search . '%')
            ->orWhere('description', 'like', '%' . $this->search . '%')
            ->get();
    }

    public function render()
    {
        return view('livewire.products-table');
    }
}
