<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Order;

class OrderMail extends Mailable
{
    use Queueable, SerializesModels;
    public $order;
    public $cart;
    /**
     * Create a new message instance.
     *
     * 
     * @return void
     */
    public function __construct($order, $cart)
    {
        //
        $this->cart = $cart;
        $this->order = $order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($address = 'farmacastrov@gmail.com', $name = 'Farma Častrov')->subject("🥩 Děkujeme za Vaši objednávku jencku")->markdown('email.Order');
    }
}
